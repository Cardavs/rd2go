import React from 'react';
import { Link } from 'react-router-dom';
import {BsLinkedin, BsGithub, BsYoutube, BsInstagram, BsSend} from "react-icons/bs";

const Footer = () => {
  return( 
    <>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
              <BsSend size={36} color="white" />
                <h2 className='mb-0 text-white'>Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input 
                type="text" 
                className="form-control py-1" 
                placeholder="Ingresa tu dirección de correo" 
                aria-label="Ingresa tu dirección de correo" 
                aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">Suscribirse</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className='text-white mb-4'>Contactanos</h4>
              <div className='text-white fs-6'>
                <address>Hno : 277 Near Vill chopal, <br /> Sonipat, Haryana <br /> PinCode: 131103</address>
                <a href="tel:+23 23986752" className="mt-3 d-block mb-1 text-white">+23 23986753
                </a>
                <a href="mailto:rd2go@gmail.com" className="mt-2 d-block mb-0 text-white">rd2go@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a className='text-white' href="#">
                    <BsLinkedin className='fs-4'/>
                  </a>
                  <a className='text-white' href="#">
                    <BsInstagram className='fs-4'/>
                  </a>
                  <a className='text-white' href="#">
                    <BsGithub className='fs-4'/>
                  </a>
                  <a className='text-white' href="#">
                    <BsYoutube className='fs-4'/>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className='text-white mb-4'>Información</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className="text-white py-2 mb-1">Política de Privacidad</Link>
                <Link className="text-white py-2 mb-1">Política de Reembolsos</Link>
                <Link className="text-white py-2 mb-1">Política de Envíos</Link>
                <Link className="text-white py-2 mb-1">Terminos y Condiciones</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className='text-white mb-4'>Cuenta</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className="text-white py-2 mb-1">Busqueda</Link>
                <Link className="text-white py-2 mb-1">Sobre Nosotros</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Contacto</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className='text-white mb-4'>Links Directos</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className="text-white py-2 mb-1">Accesorios</Link>
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Audifonos</Link>
                <Link className="text-white py-2 mb-1">Smart Watches</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className='text-center mb-0 text-white'>&copy; { new Date().getFullYear()}; Powered by Students Suouls</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;