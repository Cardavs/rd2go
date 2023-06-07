import React from 'react';
import { Link } from 'react-router-dom';
import {BsLinkedin, BsGithub, BsYoutube, BsInstagram, BsSend} from "react-icons/bs";

const Footer = () => {
  return( 
    <>
      <footer className='main-footer'>
        <div className="xxl-container">
          <div className="main-footer-container">
            <div className="footer-sign">
              <div className="footer-top-data">
              <BsSend size={36} color="white" />
                <h2>Suscríbase al boletín</h2>
              </div>
            </div>
            <div className="subscription-bar">
              <div className="input-group">
                <input 
                type="text" 
                className="form-control footer-input" 
                placeholder="Ingresa tu dirección de correo" 
                aria-label="Ingresa tu dirección de correo" 
                aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2">Suscribirse</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='footer-first-column'>
        <div className="xxl-footer">
          <div className="line">
            <div className="footer-col-4">
              <h4>Contactanos</h4>
              <div className='footer-info'>
                <address>Hno : 277 Near Vill chopal, <br /> Sonipat, Haryana <br /> PinCode: 131103</address>
                <a href="tel:+23 23986752" className="phone">+23 23986753
                </a>
                <a href="mailto:rd2go@gmail.com" className="mail">rd2go@gmail.com
                </a>
                <div className="social_icons">
                  <a style={{ color: 'white' }} href="#">
                    <BsLinkedin className='bs'/>
                  </a>
                  <a style={{ color: 'white' }} href="#">
                    <BsInstagram className='bs'/>
                  </a>
                  <a style={{ color: 'white' }} href="#">
                    <BsGithub className='bs'/>
                  </a>
                  <a style={{ color: 'white' }} href="#">
                    <BsYoutube className='bs'/>
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-col-3">
              <h4>Información</h4>
              <div className='footer-link'>
                <Link className="text-white py-2 mb-1">Política de Privacidad</Link>
                <Link className="text-white py-2 mb-1">Política de Reembolsos</Link>
                <Link className="text-white py-2 mb-1">Política de Envíos</Link>
                <Link className="text-white py-2 mb-1">Terminos y Condiciones</Link>
              </div>
            </div>
            <div className="footer-col-3">
              <h4>Cuenta</h4>
              <div className='footer-link'>
                <Link className="text-white py-2 mb-1">Busqueda</Link>
                <Link className="text-white py-2 mb-1">Sobre Nosotros</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Contacto</Link>
              </div>
            </div>
            <div className="footer-col-3">
              <h4>Links Directos</h4>
              <div className='footer-link'>
                <Link className="text-white py-2 mb-1">Accesorios</Link>
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Audifonos</Link>
                <Link className="text-white py-2 mb-1">Smart Watches</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='footer-end'>
        <div className="xxl-footer">
          <div className="line">
            <div className="footer-end-text">
              <p>&copy; { new Date().getFullYear()}; Powered by Students Suouls</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;