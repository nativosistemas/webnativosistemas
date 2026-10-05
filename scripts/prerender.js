// Se ejecuta después de `react-scripts build` (script "postbuild").
// Renderiza la app a HTML estático para que buscadores y agentes de IA lean el contenido
// sin ejecutar JavaScript, y genera llms.txt, sitemap.xml y los datos estructurados (JSON-LD).

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const buildDir = path.join(rootDir, 'build');

require('@babel/register')({
  babelrc: false,
  configFile: false,
  cache: false,
  only: [path.join(rootDir, 'src')],
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
});
// Los CSS ya están en el bundle de CRA; en Node se ignoran.
require.extensions['.css'] = () => {};

const React = require('react');
const { renderToString } = require('react-dom/server');
const { CacheProvider } = require('@emotion/react');
const createCache = require('@emotion/cache').default;
const createEmotionServer = require('@emotion/server/create-instance').default;
const App = require('../src/App').default;
const { company, hero, highlights, intro, processSteps, services } = require('../src/content');

function renderApp() {
  // Misma key que el cache por defecto del cliente, para que Emotion reutilice estos estilos al hidratar.
  const cache = createCache({ key: 'css' });
  const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(cache);
  const html = renderToString(React.createElement(CacheProvider, { value: cache }, React.createElement(App)));
  const styles = constructStyleTagsFromChunks(extractCriticalToChunks(html));
  return { html, styles };
}

function buildJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${company.url}#organization`,
    name: company.name,
    url: company.url,
    logo: company.logo,
    image: company.image,
    description: company.description,
    email: company.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: company.city,
      addressRegion: company.region,
      addressCountry: company.country,
    },
    areaServed: { '@type': 'Country', name: company.countryName },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios',
      itemListElement: services.map((service) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: service.title, description: service.text },
      })),
    },
  };
  // Evita que un "</script>" dentro del contenido cierre la etiqueta.
  const json = JSON.stringify(data).replace(/</g, '\\u003c');
  return `<script type="application/ld+json">${json}</script>`;
}

function buildLlmsTxt() {
  return [
    `# ${company.name}`,
    '',
    `> ${company.description}`,
    '',
    `${hero.copy} ${intro.copy}`,
    '',
    '## Servicios',
    '',
    ...services.map((service) => `- **${service.title}**: ${service.text}`),
    '',
    '## Por qué elegirnos',
    '',
    ...highlights.map((item) => `- ${item}`),
    '',
    '## Proceso de trabajo',
    '',
    ...processSteps.map((step, index) => `${index + 1}. ${step}`),
    '',
    '## Contacto',
    '',
    `- Email: ${company.email}`,
    `- Ubicación: ${company.city}, ${company.region}, ${company.countryName}`,
    `- Sitio web: ${company.url}`,
    '',
  ].join('\n');
}

function buildSitemap() {
  const lastmod = new Date().toISOString().slice(0, 10);
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${company.url}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>
</urlset>
`;
}

function replaceOnce(source, search, replacement) {
  if (!source.includes(search)) {
    throw new Error(`prerender: no se encontró "${search}" en build/index.html`);
  }
  return source.replace(search, () => replacement);
}

const indexPath = path.join(buildDir, 'index.html');
const { html, styles } = renderApp();
let page = fs.readFileSync(indexPath, 'utf8');
page = replaceOnce(page, '<div id="root"></div>', `<div id="root">${html}</div>`);
page = replaceOnce(page, '</head>', `${buildJsonLd()}${styles}</head>`);
fs.writeFileSync(indexPath, page);

fs.writeFileSync(path.join(buildDir, 'llms.txt'), buildLlmsTxt());
fs.writeFileSync(path.join(buildDir, 'sitemap.xml'), buildSitemap());

console.log('prerender: index.html, llms.txt y sitemap.xml generados en build/');
