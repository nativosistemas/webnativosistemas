import { useState } from 'react';
import './App.css';

const services = [
  {
    icon: 'fa-html5',
    title: 'Sitios y sistemas web',
    text: 'Diseñamos sitios y sistemas web autoadministrables, rápidos y preparados para acompañar el crecimiento de tu negocio.',
  },
  {
    icon: 'fa-desktop',
    title: 'Software a medida',
    text: 'Automatizamos procesos internos para que tu equipo trabaje mejor, más rápido y con menos pasos manuales.',
  },
  {
    icon: 'fa-shopping-cart',
    title: 'E-commerce',
    text: 'Integramos tiendas online con foco en conversión, gestión simple y una experiencia de compra clara.',
  },
  {
    icon: 'fa-mobile-phone',
    title: 'Aplicaciones móviles',
    text: 'Creamos apps funcionales para que clientes y equipos puedan trabajar desde cualquier dispositivo.',
  },
];

const stats = [
  { value: '100%', label: 'Enfoque en negocio real' },
  { value: '3 pasos', label: 'Proceso claro y ágil' },
  { value: '24/7', label: 'Disponibilidad digital' },
];

const highlights = [
  'Estrategia digital con objetivos de negocio claros.',
  'Interfaces simples, intuitivas y fáciles de administrar.',
  'Tecnología moderna y arquitectura pensada para crecer.',
];

const processSteps = [
  'Relevamos objetivos, usuarios y puntos de fricción para definir la ruta correcta.',
  'Diseñamos una solución con estructura clara y una experiencia funcional desde el inicio.',
  'Desarrollamos, validamos y acompañamos la evolución del producto después del lanzamiento.',
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="hero" id="top">
        <nav className="topbar" aria-label="Navegación principal">
          <a className="brand" href="#top" aria-label="Nativo Sistemas inicio">
            <img src="img/logo-nativo1blanco.svg" alt="Nativo Sistemas" />
          </a>

          <button
            className="menu-button"
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="main-menu"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="sr-only">Abrir menú</span>
            <i className={`fa ${isMenuOpen ? 'fa-times' : 'fa-bars'}`} aria-hidden="true" />
          </button>

          <div className={`nav-links ${isMenuOpen ? 'is-open' : ''}`} id="main-menu">
            <a href="#services" onClick={closeMenu}>Servicios</a>
            <a href="#process" onClick={closeMenu}>Proceso</a>
            <a href="#contact" onClick={closeMenu}>Contacto</a>
          </div>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">Software a medida</p>
          <h1>Soluciones digitales para impulsar tu empresa.</h1>
          <p className="hero-copy">
            Diseñamos y desarrollamos sistemas web, tiendas online y aplicaciones móviles con foco en rendimiento,
            usabilidad y crecimiento a largo plazo.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#contact">Hablemos</a>
            <a className="secondary-action" href="#services">Ver servicios</a>
          </div>
        </div>
      </header>

      <main>
        <section className="intro-section" aria-labelledby="intro-title">
          <div>
            <p className="section-kicker">Experiencia + tecnología</p>
            <h2 id="intro-title">Creamos productos simples de usar y listos para escalar.</h2>
          </div>
          <div className="intro-copy-wrap">
            <p>
              Creamos soluciones que acompañan el crecimiento real de tu negocio. Combinamos una experiencia clara,
              una arquitectura estable y estrategia digital para que cada decisión tenga impacto.
            </p>
            <ul className="highlight-list" aria-label="Ventajas de Nativo Sistemas">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="stats-section" aria-label="Indicadores clave">
          <div className="stats-grid">
            {stats.map((stat) => (
              <article className="stat-card" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="services-section" id="services" aria-labelledby="services-title">
          <div className="section-heading">
            <p className="section-kicker">Servicios</p>
            <h2 id="services-title">Desarrollo integral para tu operación digital</h2>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-icon" aria-hidden="true">
                  <i className={`fa ${service.icon}`} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="process-section" id="process" aria-labelledby="process-title">
          <div className="section-heading">
            <p className="section-kicker">Método de trabajo</p>
            <h2 id="process-title">Del diagnóstico al producto en producción</h2>
          </div>

          <ol className="process-list">
            {processSteps.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div>
            <p className="section-kicker">Contacto</p>
            <h2 id="contact-title">Hablemos de tu próxima solución digital.</h2>
            <p>Rosario, Santa Fe, Argentina</p>
          </div>
          <a className="contact-link" href="mailto:nativosistemas@outlook.com.ar">
            <i className="fa fa-envelope-o" aria-hidden="true" />
            nativosistemas@outlook.com.ar
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <span>Nativo Sistemas</span>
        <a href="#top" aria-label="Volver al inicio">
          <i className="fa fa-chevron-up" aria-hidden="true" />
        </a>
      </footer>
    </div>
  );
}

export default App;
