import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';

import { FaShippingFast } from 'react-icons/fa';
import { AiOutlineGift, AiOutlinePercentage, AiOutlineCreditCard } from 'react-icons/ai'; 
import { FiHeadphones } from 'react-icons/fi';

const Home = () => {
  return (
    <>
      <section className="home_wrapper-1">
        <div className="xxl-container">
          <div className="line">
            <div className="fifty-col">
              <div className="main-banner">
                <img src="images/ipad-banner2.jpg" className='main-banner-immage' alt="main banner" />
                <div className="main-banner-content">
                  <h4>La Mejor para los Profesionales</h4>
                  <h5>iPad S13+ Pro</h5>
                  <p>Desde $900.00 <br /> a $50.00/mes</p>
                  <Link className='button'>Comprar Ahora</Link>
                </div>
              </div>
            </div>
            <div className="fifty-col">
              <div className="secondary-products">
                <div className="small-banner">
                  <img 
                  src="images/catbanner-04.jpg" 
                  className='secondary-product' 
                  alt="main banner" />
                  <div className="small-banner-content">
                    <h4>Mas Vendidos</h4>
                    <h5>Laptops</h5>
                    <p>Desde $500.00 <br /> a $50.00/mes</p>
                  </div>
                </div>
                <div className="small-banner">
                  <img 
                  src="images/catbanner-04.jpg" 
                  className='secondary-product' 
                  alt="main banner" />
                  <div className="small-banner-content">
                    <h4>Mas Vendidos</h4>
                    <h5>Audifonos</h5>
                    <p>Desde $200.00 <br /> a $50.00/mes</p>
                  </div>
                </div>
                <div className="small-banner">
                  <img 
                  src="images/catbanner-04.jpg" 
                  className='secondary-product' 
                  alt="main banner" />
                  <div className="small-banner-content">
                    <h4>Mas Vendidos</h4>
                    <h5>TVs</h5>
                    <p>Desde $1500.00 <br /> a $50.00/mes</p>
                  </div>
                </div>
                <div className="small-banner">
                  <img 
                  src="images/catbanner-04.jpg" 
                  className='secondary-product' 
                  alt="main banner" />
                  <div className="small-banner-content">
                    <h4>Mas Vendidos</h4>
                    <h5>Bocinas</h5>
                    <p>Desde $100.00 <br /> a $50.00/mes</p>
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
                  <FaShippingFast size={36}/>
                  <div>
                    <h6>Envío Gratis</h6>
                    <p className='mb-0'>Pedidos sobre $100</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <AiOutlineGift size={36}/>
                  <div>
                    <h6>Ofertas Diarias</h6>
                    <p className='mb-0'>Desde 25%</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <FiHeadphones size={36}/>
                  <div>
                    <h6>Sopporte 24/7</h6>
                    <p className='mb-0'>Habla con expertos</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <AiOutlinePercentage size={36}/>
                  <div>
                    <h6>Precios Accesibles</h6>
                    <p className='mb-0'>Precios de Fabrica</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <AiOutlineCreditCard size={36}/>
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
      <section className="home-wrapper-2">
        <div className="xxl-container">
            <div className="line">
              <div className="onh-container">
                <div className="categories">
                  <div className='categorie-image'>
                    <div>
                      <h6>Cámaras</h6>
                      <p>10 Modelos</p>
                    </div>
                    <img src="images/camera.jpg" alt="camera" />
                  </div>
                  <div className='categorie-image'>
                    <div>
                      <h6>Smart TV</h6>
                      <p>10 Modelos</p>
                    </div>
                    <img src="images/camera.jpg" alt="camera" />
                  </div>
                  <div className='categorie-image'>
                    <div>
                      <h6>Smart Watches</h6>
                      <p>10 Modelos</p>
                    </div>
                    <img src="images/camera.jpg" alt="camera" />
                  </div>
                  <div className='categorie-image'>
                    <div>
                      <h6>Musica y Gaming</h6>
                      <p>10 Modelos</p>
                    </div>
                    <img src="images/camera.jpg" alt="camera" />
                  </div>
                  <div className='categorie-image'>
                    <div>
                      <h6>Cámaras</h6>
                      <p>10 Modelos</p>
                    </div>
                    <img src="images/camera.jpg" alt="camera" />
                  </div>
                  <div className='categorie-image'>
                    <div>
                      <h6>Smart TV</h6>
                      <p>10 Modelos</p>
                    </div>
                    <img src="images/camera.jpg" alt="camera" />
                  </div>
                  <div className='categorie-image'>
                    <div>
                      <h6>Smart Watches</h6>
                      <p>10 Modelos</p>
                    </div>
                    <img src="images/camera.jpg" alt="camera" />
                  </div>
                  <div className='categorie-image'>
                    <div>
                      <h6>Musica y Gaming</h6>
                      <p>10 Modelos</p>
                    </div>
                    <img src="images/camera.jpg" alt="camera" />
                  </div>
                  
                </div>
              </div>
            </div>
        </div>
      </section>
      <section className="featured-wrapper">
        <div className="featured-container">
            <div className="onh-container">
              <h3 className="section-heading">Colección Destacada</h3>
            </div>
          <div className="line-row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="famous-wrapper">
        <div className="xxl-container">
          <div className="line-row">
            <div className="twt-col">
              <div className="famous-card">
                <img src="images/famous-1.png" className="img-famous" alt="famous"/>
                <div className="famous-content">
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $400 $16.7/mes to $11/mes</p>
                </div>
              </div>
            </div>
            <div className="twt-col">
              <div className="famous-card">
                <img src="images/famous-2.png" className="img-famous" alt="famous"/>
                <div className="famous-content">
                  <h5 className="text-dark">Studio Display</h5>
                  <h6 className="text-dark">600 Nits de brillo</h6>
                  <p className="text-dark">27 pulgadas 5k Display</p>
                </div>
              </div>
            </div>
            <div className="twt-col">
              <div className="famous-card">
                <img src="images/famous-2.png" className="img-famous" alt="famous"/>
                <div className="famous-content">
                  <h5 className="text-dark">Smartphone</h5>
                  <h6 className="text-dark">Smartphone 13 Pro</h6>
                  <p className="text-dark">From $34400 $1666.7/mes to $1111/mes</p>
                </div>
              </div>
            </div>
            <div className="twt-col">
              <div className="famous-card">
                <img src="images/famous-2.png" className="img-famous" alt="famous"/>
                <div className="famous-content">
                  <h5 className="text-dark">Home Speaker</h5>
                  <h6 className="text-dark">Sonido Envolvente</h6>
                  <p className="text-dark">From $500 $22.7/mes to $11/mes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='special-wrapper'>
        <div className="xxl-container">
          <div className="onh-container">
              <h3 className="section-heading">Productos Especiales</h3>
            </div>
          <div className="line-row">
            
              <SpecialProduct />
              <SpecialProduct />
            
          </div>
          <div className="line-row">
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </section>
      <section className="popular-wrapper">
        <div className="xxl-container">
          <div className="line">
            <div className="onh-container">
              <h3 className="section-heading">Productos Populares</h3>
            </div>
          </div>
          <div className="line-row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="marque-wrapper">
        <div className="xxl-container">
          <div className="line">
            <div className="onh-container">
              <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className='marquee'>
                <div className="marquee-image">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="marquee-image">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="marquee-image">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="marquee-image">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="marquee-image">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="marquee-image">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="marquee-image">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="marquee-image">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
              </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home