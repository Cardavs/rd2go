import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import {HiOutlineArrowLeft} from 'react-icons/hi'

const SingleBlog = () => {
  return <>
  <Meta title={"Dynamic Blog Name"}/>
        <BreadCrumb title="Dynamic Blog Name"/>
        <div className="blog-wrapper home-wrapper-2 py-5">
      <div className="container-xxl">
        <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to='/blogs' className='d-flex align-items-center gap-10'><HiOutlineArrowLeft className='fs-4' />Volver a Blogs</Link>
                <h3 className='title'>
                    Hermosa Mañana para Comprar
                </h3>
                <img src="images/blog-3.webp" className='img-fluid w-100 my-4' alt="blog" />
                <p>¡Bienvenidos a nuestro blog! Hoy queremos hablarles de la maravillosa experiencia de comenzar una mañana de compras. No hay nada como el sentimiento de emoción y anticipación que se despierta cuando sabes que pasarás el día explorando las tiendas en busca de tus productos favoritos.

                Imagina despertar con el sol brillando en tu ventana y una suave brisa acariciando tu rostro. La ciudad se despierta lentamente mientras tú te preparas para disfrutar de una jornada llena de descubrimientos y nuevas adquisiciones. Desde boutiques exclusivas hasta grandes almacenes, las posibilidades son infinitas y las oportunidades abundantes.</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  </>
}

export default SingleBlog