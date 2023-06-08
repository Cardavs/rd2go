import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import watch from "../images/watch.jpg"
import {AiFillDelete} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <>
    <Meta title={"Cart"}/>
        <BreadCrumb title="Cart"/>
        <section className="cart-wrapper">
            <div className="xxl-contailer">
                <div className="row custom-row">
                    <div className="onh-container">
                        <div className="cart-header">
                            <h4 className='cart-col-1'>Producto</h4>
                            <h4 className='cart-col-2'>Precio</h4>
                            <h4 className='cart-col-3'>Cantidad</h4>
                            <h4 className='cart-col-4'>Total</h4>
                        </div>
                        <div className="cart-data">
                            <div className='cart-col-1-container'>
                                <div className='image-container-cart'>
                                    <img src={watch} className='product-cart-img' 
                                    alt="product image" />
                                </div>
                                <div className='img-specs'>
                                    <p>Reloj</p>
                                    <p>Size: as</p>
                                    <p>Color: ada</p>
                                </div>
                            </div>
                            <div className='cart-col-2'>
                                <h5 className="price">$ 100</h5>
                            </div>
                            <div className='cart-col-3-container'>
                                <div>
                                    <input
                                        className="form-control"
                                        type="number"
                                        name=""
                                        min={1}
                                        max={10}
                                        id=""
                                    />
                                </div>
                                <div>
                                    <AiFillDelete className="text-danger " />
                                </div>
                            </div>
                            <div className='cart-col-4'>
                                <h5 className="price">$ 100</h5>
                            </div>
                        </div>
                        <div className="cart-data">
                            <div className='cart-col-1-container'>
                                <div className='image-container-cart'>
                                    <img src={watch} className='product-cart-img' 
                                    alt="product image" />
                                </div>
                                <div className='img-specs'>
                                    <p>Reloj</p>
                                    <p>Size: as</p>
                                    <p>Color: ada</p>
                                </div>
                            </div>
                            <div className='cart-col-2'>
                                <h5 className="price">$ 100</h5>
                            </div>
                            <div className='cart-col-3-container'>
                                <div>
                                    <input
                                        className="form-control"
                                        type="number"
                                        name=""
                                        min={1}
                                        max={10}
                                        id=""
                                    />
                                </div>
                                <div>
                                    <AiFillDelete className="text-danger " />
                                </div>
                            </div>
                            <div className='cart-col-4'>
                                <h5 className="price">$ 100</h5>
                            </div>
                        </div>
                    </div>
                    <div className="end-buttons">
                        <div className="total-cart">   
                            <div className="total-container">
                                    <Link to="/product" className="button">
                                        Continuar Comprando
                                    </Link>
                                <div className="total-cost">
                                    <h4>SubTotal: $ 1000</h4>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </section>
    </>
  );
};

export default Cart;