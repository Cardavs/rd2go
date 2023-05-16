import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';

const Home = () => {
  return (
    <>
      <section className="home_wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img src="images/ipad-banner2.jpg" className='img-fluid rounded-3' alt="main banner" />
                <div className="main-banner-content position-absolute">
                  <h4>La Mejor para los Profesionales</h4>
                  <h5>iPad S13+ Pro</h5>
                  <p>Desde $900.00 <br /> a $50.00/mes</p>
                  <Link className='button'>Comprar Ahora</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative">
                  <img 
                  src="images/catbanner-01.jpg" 
                  className='img-fluid rounded-3' 
                  alt="main banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>Mas Vendidos</h4>
                    <h5>Laptops</h5>
                    <p>Desde $500.00 <br /> a $50.00/mes</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img 
                  src="images/catbanner-03.jpg" 
                  className='img-fluid rounded-3' 
                  alt="main banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>Novedades</h4>
                    <h5>iPad Air</h5>
                    <p>Desde $500.00 <br /> a $40.00/mes</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img 
                  src="images/catbanner-02.jpg" 
                  className='img-fluid rounded-3' 
                  alt="main banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>15% de Descuento</h4>
                    <h5>Smartwatch 4</h5>
                    <p>Desde $100.00 <br /> a $20.00/mes</p>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img 
                  src="images/catbanner-04.jpg" 
                  className='img-fluid rounded-3' 
                  alt="main banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>Envío Gratis</h4>
                    <h5>G33 Pro</h5>
                    <p>Desde $200.00 <br /> a $50.00/mes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service.png" alt="services" />
                  <div>
                    <h6>Envío Gratis</h6>
                    <p className='mb-0'>Pedidos sobre $100</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service-02.png" alt="services" />
                  <div>
                    <h6>Ofertas Diarias</h6>
                    <p className='mb-0'>Desde 25%</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service-03.png" alt="services" />
                  <div>
                    <h6>Sopporte 24/7</h6>
                    <p className='mb-0'>Habla con expertos</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service-04.png" alt="services" />
                  <div>
                    <h6>Precios Accesibles</h6>
                    <p className='mb-0'>Precios de Fabrica</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service-05.png" alt="services" />
                  <div>
                    <h6>Pagos Seguros</h6>
                    <p className='mb-0'>Pagos 100% Protegidos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                  <div className='d-flex gap align-items-center'>
                    <div>
                      <h6>Cámaras</h6>
                      <p>10 Modelos</p>
                    </div>
                    <img src="images/camera.jpg" alt="camera" />
                  </div>
                  <div className='d-flex gap align-items-center'>
                    <div>
                      <h6>Smart TV</h6>
                      <p>10 Modelos</p>
                    </div>
                    <img src="images/TV.jpg" alt="camera" />
                  </div>
                  <div className='d-flex gap align-items-center'>
                    <div>
                      <h6>Smart Watches</h6>
                      <p>10 Modelos</p>
                    </div>
                    <img src="images/camera.jpg" alt="camera" />
                  </div>
                  <div className='d-flex gap align-items-center'>
                    <div>
                      <h6>Musica y Gaming</h6>
                      <p>10 Modelos</p>
                    </div>
                    <img src="images/headphone.jpg" alt="camera" />
                  </div>
                  <div className='d-flex gap align-items-center'>
                    <div>
                      <h6>Cámaras</h6>
                      <p>10 Modelos</p>
                    </div>
                    <img src="images/camera.jpg" alt="camera" />
                  </div>
                  <div className='d-flex gap align-items-center'>
                    <div>
                      <h6>Smart TV</h6>
                      <p>10 Modelos</p>
                    </div>
                    <img src="images/TV.jpg" alt="camera" />
                  </div>
                  <div className='d-flex gap align-items-center'>
                    <div>
                      <h6>Smart Watches</h6>
                      <p>10 Modelos</p>
                    </div>
                    <img src="images/camera.jpg" alt="camera" />
                  </div>
                  <div className='d-flex gap align-items-center'>
                    <div>
                      <h6>Musica y Gaming</h6>
                      <p>10 Modelos</p>
                    </div>
                    <img src="images/headphone.jpg" alt="camera" />
                  </div>
                  
                </div>
              </div>
            </div>
        </div>
      </section>
      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Colección Destacada</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className='special-wrapper py-5 home-wrapper-2'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Productos Especiales</h3>
            </div>
            <div className="row">
              
            </div>
          </div>
        </div>
      </section>
      <section className="marque-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className='d-flex'>
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Blogs Mas Recientes</h3>
            </div>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home