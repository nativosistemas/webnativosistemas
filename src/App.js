//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((isOpen) => !isOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <button id="menu-toggle" className="btn btn-dark btn-lg toggle" onClick={toggleMenu} type="button"><i className="fa fa-bars"></i></button>
      <nav id="sidebar-wrapper" className={isMenuOpen ? 'active' : ''}>
        <ul className="sidebar-nav">
          <button id="menu-close" className="btn btn-light btn-lg pull-right toggle" onClick={closeMenu} type="button"><i className="fa fa-times"></i></button>
          <li className="sidebar-brand">
            <a href="#top" onClick={closeMenu}>Menu</a>
          </li>
          <li>
            <a href="#top" onClick={closeMenu}>Inicio</a>
          </li>
          <li>
            <a href="#services" onClick={closeMenu}>Servicios</a>
          </li>
          <li>
            <a href="#contactPie" onClick={closeMenu}>Contacto</a>
          </li>
        </ul>
      </nav>
      <header id="top" className="header">
        <div className="text-vertical-center">
          <div className="container containerLogo">
            <img className="logoSVG" alt="Nativo Sistemas" src="img/logo-nativo1blanco.svg" title="Nativo Sistemas" />
          </div>
        </div>
      </header>
      <section id="about" className="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>Mejor experiencia de usuario, mayor productividad</h2>
              <p className="lead">Soluciones a medida para necesidades específicas.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="services bg-primary">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-10 col-lg-offset-1">
              <h1>Servicios</h1>
              <hr className="small" />
              <div className="row">
                <div className="col-md-3 col-sm-6">
                  <div className="service-item">
                    <span className="fa-stack fa-4x">
                      <i className="fa fa-html5 fa-stack-2x"></i>
                    </span>
                    <h4 className="titulo-servico">
                      <strong>SITIOS Y SISTEMAS WEB</strong>
                    </h4>
                    <p className="descr-servico">Especialistas en programación de sitios y sistemas web autoadministrables, estables y escalables.</p>

                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="service-item">
                    <span className="fa-stack fa-4x">
                      <i className="fa fa-desktop fa-stack-2x"></i>
                    </span>
                    <h4 className="titulo-servico">
                      <strong>SOFTWARE A MEDIDA</strong>
                    </h4>
                    <p className="descr-servico">Desarrollamos sistemas personalizados que acompañan y fortalecen las necesidades reales de tu empresa.</p>

                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="service-item">
                    <span className="fa-stack fa-4x">
                      <i className="fa fa-shopping-cart fa-stack-2x"></i>

                    </span>
                    <h4 className="titulo-servico">
                      <strong>PLATAFORMAS E-COMMERCE</strong>
                    </h4>
                    <p className="descr-servico">Integramos y diseñamos plataforma de e-commerce que mejoran la experiencia de usuario y la productividad de tu tienda.</p>

                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="service-item">
                    <span className="fa-stack fa-4x">
                      <i className="fa fa-mobile-phone fa-stack-2x"></i>

                    </span>
                    <h4 className="titulo-servico">
                      <strong>APLICACIONES MÓVILES</strong>
                    </h4>
                    <p className="descr-servico">Diseñamos, desarrollamos y publicamos APPS para iOS, Android y Windows.</p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <section id="contactPie">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 col-lg-offset-1 text-center">
                <h4><strong>Nativo Sistemas</strong>
                </h4>
                <p>
                  Urquiza 1455 - Rosario - Santa Fe - Argentina
                        </p>
                <ul className="list-unstyled">                 
                  <li><i className="fa fa-envelope-o fa-fw"></i><a href="mailto:nativosistemas@outlook.com.ar">nativosistemas@outlook.com.ar</a>
                  </li>
                </ul>
                          
              </div>
            </div>
          </div>
        </section>
        <a id="to-top" href="#top" className="btn btn-dark btn-lg"><i className="fa fa-chevron-up fa-fw fa-1x"></i></a>
      </footer>

    </>
  );
}

export default App;
