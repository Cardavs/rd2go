import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import {AiOutlineHome, AiOutlineMail} from "react-icons/ai"
import {BiPhoneCall, BiInfoCircle} from "react-icons/bi" 

const Contact = () => {
  return <>
    <Meta title={"Contactanos"}/>
    <BreadCrumb title="Contactanos"/>  
    <div className="contact-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.871343182157!2d-99.18728132491977!3d19.33138834390559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce00015be0a713%3A0x3fc11681a8244370!2sFacultad%20de%20Ingenier%C3%ADa%20UNAM!5e0!3m2!1ses!2smx!4v1685242205709!5m2!1ses!2smx" 
          width="600" 
          height="450" 
          className='border-0 w-100'
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div>
                <h3 className='contact-title mb-4'>Contactar</h3>
                <form action="" className='d-flex flex-column gap-15'>
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
                    <textarea className="w-100 form-control" id="" cols="30" rows="4" placeholder='Comentarios'></textarea>
                  </div>
                  <div>
                    <button className='button boreder-0'>Enviar</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className='contact-title mb-4'>Ponte en contacto con nosostros</h3>
                <div>
                  <ul className='ps-0'>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiOutlineHome className="fs-5"/>
                      <address>Circuito Interior s/n, Ciudad Universitaria, Coyoacán, 04510 Ciudad de México, México.</address>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <BiPhoneCall className="fs-5"/>
                      <a href="tel:+23 5578096513">+23 5578096513</a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiOutlineMail className="fs-5"/>
                      <a href="mailto:rd2go@gmail.com">rd2go@gmail.com</a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <BiInfoCircle className="fs-5"/>
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