// Contenido del sitio. Lo usa la app y también scripts/prerender.js para generar
// el HTML prerenderizado, llms.txt, sitemap.xml y los datos estructurados (JSON-LD).

export const company = {
  name: 'Nativo Sistemas',
  url: 'https://www.nativosistemas.com.ar/',
  email: 'nativosistemas@outlook.com.ar',
  city: 'Rosario',
  region: 'Santa Fe',
  country: 'AR',
  countryName: 'Argentina',
  logo: 'https://www.nativosistemas.com.ar/img/logo.svg',
  image: 'https://www.nativosistemas.com.ar/img/nativosistemas.jpg',
  description:
    'Desarrollamos sistemas web, software a medida, aplicaciones móviles y e-commerce para empresas que necesitan soluciones claras, escalables y adaptadas a su operación.',
};

export const hero = {
  title: 'Soluciones digitales para impulsar tu empresa.',
  copy:
    'Diseñamos y desarrollamos sistemas web, tiendas online y aplicaciones móviles con foco en rendimiento, usabilidad y crecimiento a largo plazo.',
};

export const intro = {
  title: 'Creamos productos simples de usar y listos para escalar.',
  copy:
    'Creamos soluciones que acompañan el crecimiento real de tu negocio. Combinamos una experiencia clara, una arquitectura estable y estrategia digital para que cada decisión tenga impacto.',
};

export const services = [
  {
    id: 'web',
    title: 'Sitios y sistemas web',
    text: 'Diseñamos sitios y sistemas web autoadministrables, rápidos y preparados para acompañar el crecimiento de tu negocio.',
  },
  {
    id: 'software',
    title: 'Software a medida',
    text: 'Automatizamos procesos internos para que tu equipo trabaje mejor, más rápido y con menos pasos manuales.',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    text: 'Integramos tiendas online con foco en conversión, gestión simple y una experiencia de compra clara.',
  },
  {
    id: 'mobile',
    title: 'Aplicaciones móviles',
    text: 'Creamos apps funcionales para que clientes y equipos puedan trabajar desde cualquier dispositivo.',
  },
];

export const stats = [
  { value: '100%', label: 'Enfoque en negocio real' },
  { value: '3 pasos', label: 'Proceso claro y ágil' },
  { value: '24/7', label: 'Disponibilidad digital' },
];

export const highlights = [
  'Estrategia digital con objetivos de negocio claros.',
  'Interfaces simples, intuitivas y fáciles de administrar.',
  'Tecnología moderna y arquitectura pensada para crecer.',
];

export const processSteps = [
  'Relevamos objetivos, usuarios y puntos de fricción para definir la ruta correcta.',
  'Diseñamos una solución con estructura clara y una experiencia funcional desde el inicio.',
  'Desarrollamos, validamos y acompañamos la evolución del producto después del lanzamiento.',
];
