import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ReactStars from "react-rating-stars-component";
import ProductCard from '../components/ProductCard';


const OurStore = () => {
    const[grid,setGrid] = useState(4);
        
  return (
    <>
        <Meta title={"Nuestra Tienda"}/>
        <BreadCrumb title="Nuestra Tienda"/>
        <div className="store-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-3">
                        <div className='filter-card mb-3'>
                            <h3 className="filter-title">Comprar por Categories</h3>
                            <div>
                                <ul className='ps-0'>
                                    <li>Watch</li>
                                    <li>Tv</li>
                                    <li>Camera</li>
                                    <li>Laptop</li>
                                </ul>
                            </div>
                        </div>
                        <div className='filter-card mb-3'>
                            <h3 className="filter-title">Filtrar Por</h3>
                            <div>
                                <h5 className="sub-title">Disponibilidad</h5>
                                <div>
                                    <div className="form-check">
                                        <input 
                                        className="form-check-input" type="checkbox" 
                                        value="" 
                                        id=""/>
                                        <label className="form-check-label" htmlFor="">
                                            En Stock (1)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input 
                                        className="form-check-input" type="checkbox" 
                                        value="" 
                                        id="" 
                                        />
                                        <label className="form-check-label" htmlFor="">
                                            Sin Stock (0)
                                        </label>
                                    </div>
                                </div>
                                <h5 className="sub-title">Precio</h5>
                                <div className='d-flex align-items-center'>
                                    <div className="form-floating">
                                    <input type="email" className="form-control py-1"
                                     id="floatingInput" placeholder="Desde"/>
                                    <label htmlFor="floatingInput">Desde</label>
                                    </div>
                                    <div className="form-floating">
                                    <input type="email" className="form-control py-1"
                                     id="floatingInput" placeholder="Hasta"/>
                                    <label htmlFor="floatingInput">Hasta</label>
                                    </div>
                                </div>
                                <h5 className="sub-title">Colores</h5>
                                <div>
                                    <div className="d-flex flex-wrap">
                                        <ul className='colors ps-0'>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </div>
                                </div>
                                <h5 className="sub-title">Tamaño</h5>
                                <div>
                                <div className="form-check">
                                        <input 
                                        className="form-check-input" type="checkbox" 
                                        value="" 
                                        id="color-1"/>
                                        <label className="form-check-label" htmlFor="color-1">
                                            S (2)
                                        </label>
                                    </div>
                                <div className="form-check">
                                        <input 
                                        className="form-check-input" type="checkbox" 
                                        value="" 
                                        id="color-2"/>
                                        <label className="form-check-label" htmlFor="color-2">
                                            M (1)
                                        </label>
                                    </div>
                                <div className="form-check">
                                        <input 
                                        className="form-check-input" type="checkbox" 
                                        value="" 
                                        id="color-3"/>
                                        <label className="form-check-label" htmlFor="color-3">
                                            L (3)
                                        </label>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='filter-card mb-3'>
                            <h3 className="filter-title">Tags de Producto</h3>
                            <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Audifonos</span>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Laptop</span>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Celular</span>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>Relojes</span>
                                </div>
                        </div>
                        <div className='filter-card mb-3'>
                            <h3 className="filter-title">Producto al Azar</h3>
                            <div>
                                <div className="random-products d-flex mb-3">
                                    <div className="w-50">
                                        <img src="images/watch.jpg" 
                                        className='img-fluid'
                                        alt="watch" />
                                    </div>
                                    <div className="w-50">
                                        <h5>Smartwath Pro 67</h5>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <b>$300</b>
                                    </div>
                                </div>
                                <div className="random-products d-flex">
                                    <div className="w-50">
                                        <img src="images/watch.jpg" 
                                        className='img-fluid'
                                        alt="watch" />
                                    </div>
                                    <div className="w-50">
                                        <h5>Smartwath Pro 67</h5>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <b>$300</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="filter-sort-grid mb-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center gap-10">
                                    <p className='mb-0 d-block' style={{width: "150px"}}>Ordenar Por</p>
                                    <select 
                                    name=''
                                    className="form-control form-select" 
                                    id=""
                                    >
                                        <option value="manual">Características</option>
                                        <option value="best-selling">Mejor Vendedor</option>
                                        <option value="title-ascending">A-Z</option>
                                        <option value="title-descending">Z-A</option>
                                        <option value="price-ascending">Precio, mas alto a mas bajo</option>
                                        <option value="price-descending">Precio, mas bajo a mas alto</option>
                                        <option value="created-ascending">Mas viejo a mas nuevo</option>
                                        <option value="created-descending">Mas nuevo a mas viejo</option>
                                    </select>
                                </div>
                                <div>
                                    <div className='d-flex align-items-center gap-10'>
                                        <p className='totalproducts mb-0' >21 Products</p>
                                        <div className="d-flex gap-10 align-items-center grid">
                                            <img onClick={()=>{setGrid(3);}} src="images/gr4.svg"   className='d-block img-fluid'     alt="grid" />
                                            <img onClick={()=>{setGrid(4);}} src="images/gr3.svg" className='d-block img-fluid' alt="grid" />
                                            <img onClick={()=>{setGrid(6);}} src="images/gr2.svg" className='d-block img-fluid' alt="grid" />
                                            <img onClick={()=>{setGrid(12);}} src="images/gr.svg" className='d-block img-fluid' alt="grid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="products-list pb-5">
                            <div className="d-flex gap-10 flex-wrap"> 
                                <ProductCard grid={grid}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default OurStore