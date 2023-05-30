import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import watch from "../images/watch.jpg"
import {AiFillDelete} from 'react-icons/ai'

const Cart = () => {
  return (
    <>
    <Meta title={"Cart"}/>
        <BreadCrumb title="Cart"/>
        <section className="cart-wrapper home-wrapper-2 py-5">
            <div className="contailer-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="cart-header py-3 d-flex justify-contetnt-between align-items-center">
                            <h4 className='cart-col-1'>Producto</h4>
                            <h4 className='cart-col-2'>Precio</h4>
                            <h4 className='cart-col-3'>Cantidad</h4>
                            <h4 className='cart-col-4'>Total</h4>
                        </div>
                        <div className="cart-data py-3 d-flex justify-content-between align-items-center">
                            <div className='cart-col-1 gap-15 d-flex align-items-center'>
                                <div className='w-25'>
                                    <img src={watch} className='img-fluid' 
                                    alt="product image" />
                                </div>
                                <div className='w-75'>
                                    <h5 className="title">Reloj</h5>
                                    <p className="color">as</p>
                                    <p className="size">ada</p>
                                </div>
                            </div>
                            <div className='cart-col-2'>
                                <h5 className="price">$ 100</h5>
                            </div>
                            <div className='cart-col-3 d-flex align-items-center gap-15'>
                                <div>
                                    <input className='form-control' type="number" name="" id="" />
                                </div>
                                <div>
                                    <AiFillDelete />
                                </div>
                            </div>
                            <div className='cart-col-4'>
                                <h5 className="price">$ 100</h5>
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