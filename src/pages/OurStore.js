import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ReactStars from "react-rating-stars-component";
import ProductCard from '../components/ProductCard';
import Color from '../components/Color';
import { FaBars } from 'react-icons/fa';


const OurStore = () => {
    const[grid,setGrid] = useState(4);
        
  return (
    <>
        <Meta title={"Nuestra Tienda"}/>
        <BreadCrumb title="Nuestra Tienda"/>
        <div className="store-wrapper">
            <div className="xxl-container">
                <div className="line-row">
                    <div className="upper-menu">
                        <div className='filter-card'>
                            <h3 className="filter-title">Comprar por Categorias</h3>
                            <div>
                                <ul className='categories-search'>
                                    <li>Watch</li>
                                    <li>Tv</li>
                                    <li>Camera</li>
                                    <li>Laptop</li>
                                </ul>
                            </div>
                        </div>
                        <div className='filter-card-2'>
                            <h3 className="filter-title">Filtrar Por</h3>
                            <div>
                                <h5 className="sub-title">Precio</h5>
                                <div className='high-low'>
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
                            </div>

                        </div>
                        <div className='filter-card-2'>
                            <h3 className="filter-title">Tags de Producto</h3>
                            <div className="product-tags">
                                    <span className='tag'>Audifonos</span>
                                    <span className='tag'>Laptop</span>
                                    <span className='tag'>Celular</span>
                                    <span className='tag'>Relojes</span>
                                </div>
                        </div>
                        <div className='filter-card-2'>
                            <h3 className="filter-title">Producto al Azar</h3>
                            <div>
                                <div className="random-products">
                                    <div className="random-product">
                                        <img src="images/watch.jpg" 
                                        className='img-fluid'
                                        alt="watch" />
                                    </div>
                                    <div className="random-product">
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
                                <div className="random-products">
                                    <div className="random-product">
                                        <img src="images/watch.jpg" 
                                        className='img-fluid'
                                        alt="watch" />
                                    </div>
                                    <div className="random-product">
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
                    <div className="general-store-container">
                        <div className="filter-sort-grid">
                            <div className="filter-container">
                                <div className="filter">
                                    <p className='order-by' style={{width: "150px"}}>Ordenar Por</p>
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
                                    <div className='sizes-container'>
                                        <p className='totalproducts' >21 Products</p>
                                        <div className="sizes grid">
                                            <img onClick={()=>{setGrid(3);}} src="images/gr4.svg"   className='tag-icon'     alt="grid" />
                                            <img onClick={()=>{setGrid(4);}} src="images/gr3.svg" className='tag-icon' alt="grid" />
                                            <img onClick={()=>{setGrid(6);}} src="images/gr2.svg" className='tag-icon' alt="grid" />
                                            <img onClick={()=>{setGrid(12);}} src="images/gr.svg" className='tag-icon' alt="grid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="products-list">
                            <div className="products"> 
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