import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import {AiOutlineHome, AiOutlineMail} from "react-icons/ai"
import {BiPhoneCall, BiInfoCircle} from "react-icons/bi" 

const Contact = () => {
  return <>
    <Meta title={"Contactanos"}/>
    <BreadCrumb title="Contactanos"/>  
    <div className="contact-wrapper">
      <div className="xxl-container">
        <div className="line">
          <div className="onh-container">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.871343182157!2d-99.18728132491977!3d19.33138834390559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce00015be0a713%3A0x3fc11681a8244370!2sFacultad%20de%20Ingenier%C3%ADa%20UNAM!5e0!3m2!1ses!2smx!4v1685242205709!5m2!1ses!2smx" 
          width="600" 
          height="450" 
          className='map'
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="contact-container">
            <div className="contact-inner-wrapper">
              <div>
                <h3 className='contact-title'>Contactar</h3>
                <form action="" className='general-form'>
                  <div>
                    <input type='text' className="form-control" placeholder='Nombre'></input>
                  </div>
                  <div>
                    <input type='email' className="form-control" placeholder='Email'></input>
                  </div>
                  <div>
                    <input type='tel' className="form-control" placeholder='Número Teléfonico'></input>
                  </div>
                  <div>
                    <textarea className="form-control" id="" cols="30" rows="4" placeholder='Comentarios'></textarea>
                  </div>
                  <div>
                    <button className='button'>Enviar</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className='contact-title'>Ponte en contacto con nosostros</h3>
                <div>
                  <ul className='contact-info'>
                    <li className="contact-element">
                      <AiOutlineHome className="biphonecall"/>
                      <address>Circuito Interior s/n, Ciudad Universitaria, Coyoacán, 04510 Ciudad de México, México.</address>
                    </li>
                    <li className="contact-element">
                      <BiPhoneCall className="biphonecall"/>
                      <a href="tel:+23 5578096513">+23 5578096513</a>
                    </li>
                    <li className="contact-element">
                      <AiOutlineMail className="biphonecall"/>
                      <a href="mailto:rd2go@gmail.com">rd2go@gmail.com</a>
                    </li>
                    <li className="contact-element">
                      <BiInfoCircle className="biphonecall"/>
                      <p>Lunes a viernes de 7:00 a 20:00</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>;
}

export default Contact