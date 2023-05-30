import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard'
import ReactStars from "react-rating-stars-component";
import { useState } from 'react';
import ReactImageZoom from 'react-image-zoom';


const SingleProduct = () => {
  const props = {
    width: 400, 
    height: 500, 
    zoomWidth: 500, 
    img: "https://magazine.chrono24.com/cdn-cgi/image/f=auto,metadata=none,fit=cover,q=65,w=1190,h=595,dpr=2.0/2023/01/Omega-2-1-1.jpg"};
  const [orderedProduct, setorderedProduct] =useState(true);
  return (
    <>
    <Meta title={"Product Name"}/>
            <BreadCrumb title="Product Name"/>
            <div className="main-product-wrapper py-5 home-wrapper-2">
              <div className="container-xxl p-3 bg-white">
                <div className="row">
                  <div className="col-6">
                    <div className="main-product-image">
                      <div>
                        <ReactImageZoom {...props} />
                      </div>
                    </div>
                    <div className="other-product-images d-flex flex-wrap gap-15">
                      <div><img src="https://magazine.chrono24.com/cdn-cgi/image/f=auto,metadata=none,fit=cover,q=65,w=1190,h=595,dpr=2.0/2023/01/Omega-2-1-1.jpg" className='img-fluid' alt="" /></div>
                      <div><img src="https://magazine.chrono24.com/cdn-cgi/image/f=auto,metadata=none,fit=cover,q=65,w=1190,h=595,dpr=2.0/2023/01/Omega-2-1-1.jpg" className='img-fluid' alt="" /></div>
                      <div><img src="https://magazine.chrono24.com/cdn-cgi/image/f=auto,metadata=none,fit=cover,q=65,w=1190,h=595,dpr=2.0/2023/01/Omega-2-1-1.jpg" className='img-fluid' alt="" /></div>
                      <div><img src="https://magazine.chrono24.com/cdn-cgi/image/f=auto,metadata=none,fit=cover,q=65,w=1190,h=595,dpr=2.0/2023/01/Omega-2-1-1.jpg" className='img-fluid' alt="" /></div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="main-product-details">
                      <h3>Reloj a la moda G344</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      <div className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
                <h4>Descripción</h4>
              <div className="bg-white p-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor amet iusto est quis! Reiciendis cupiditate commodi veritatis, laboriosam voluptatum et sit temporibus in numquam nihil vero inventore? Odit, maxime at!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="reviews-wrapper home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3>Reseñas</h3>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className='mb-2'>Reseñas de Clientes</h4>
                      <div className='d-flex align-items-center gap-10'>
                        <ReactStars
                          count={5}
                          size={24}
                          value={4}
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <p className='mb-0'>Based on 2 Reviews</p>
                      </div>
                  </div>
                  {
                    orderedProduct&&
                    <div>
                    <a className='text-dark text-decoration-underline' href="">Escribir uns Reseña</a>
                  </div>
                  }
                </div>
                <div className='review-form py-4'>
                  <h4>Escribe una Reseña</h4>
                  <form action="" className='d-flex flex-column gap-15'>
                    <div>
                        <ReactStars
                          count={5}
                          size={24}
                          value={4}
                          edit={true}
                          activeColor="#ffd700"
                        />
                    </div>
                    <div>
                      <textarea className="w-100 form-control" id="" cols="30" rows="4" placeholder='Comentarios'></textarea>
                    </div>
                    <div className='d-flex justify-content-end'>
                      <button className='button boreder-0'>Enviar</button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-4">
                  <div className="review">
                        <div className='d-flex gap-10 align-items-center'>
                          <h6 className='mb-0'>NavDeep</h6>
                          <ReactStars
                            count={5}
                            size={24}
                            value={4}
                            edit={false}
                            activeColor="#ffd700"
                          />
                        </div>
                        <p className='mt-3'>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, veniam pariatur. Commodi quasi sequi earum expedita molestias repellat ea similique sint veniam nisi ducimus et, voluptas libero molestiae accusamus recusandae!
                        </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Productos Populares</h3>
            </div>
            
          </div>
          <div className="row">
            <ProductCard />
          </div>
        </div>
      </section>
  </>
  )
}

export default SingleProduct