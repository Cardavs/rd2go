import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import { BsHeartHalf } from 'react-icons/bs';
import { MdCompareArrows } from 'react-icons/md';
import { AiOutlineEye } from 'react-icons/ai';
import { BsBag } from 'react-icons/bs';
import watch from "../images/watch.jpg";
import watch2 from "../images/watch2.jpg";


const ProductCard = (props) => {
    const {grid} = props;
    let location = useLocation();
  return (
    <>
        <div className={` ${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}>
        <Link to=":id" className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
                <Link><BsHeartHalf size={18} color="black"/></Link>
            </div>
            <div className="product-image">
                <img src={watch} className='img-fluid' alt="product image" />
                <img src={watch2} className='img-fluid' alt="product image" />
            </div>
            <div className="product-details">
                <h6 className="brand">Havles</h6>
                <h5 className="product-tittle">
                    Smartwathc Series e200 para Niños
                </h5>
                <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    edit={false}
                    activeColor="#ffd700"
                />
                <p className={` description ${grid === 12 ? "d-block" : "d-none"}`}>
                ¡Descubre el "Smartwatch Apex"! Un reloj inteligente de vanguardia con estilo y funcionalidad excepcionales. Mantente conectado, monitorea tu salud y disfruta de una batería de larga duración. ¡El compañero perfecto para tu vida activa y elegante!
                </p>
                <p className="price">
                    $100.00
                </p>
            </div>
            <div className="action-bar position-absolute">
                <div className='d-flex flex-column'>
                    <Link><MdCompareArrows size={18} color="black"/></Link>
                </div>
                <div className='d-flex flex-column'>
                    <Link><AiOutlineEye size={18} color="black"/></Link>
                </div>
                <div className='d-flex flex-column'>
                    <Link><BsBag  size={18} color="black"/></Link>
                </div>
            </div>
        </Link>
        </div>
        <div className={` ${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}>
        <Link to=":id" className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
                <Link><BsHeartHalf size={18} color="black"/></Link>
            </div>
            <div className="product-image">
                <img src={watch} className='img-fluid' alt="product image" />
                <img src={watch2} className='img-fluid' alt="product image" />
            </div>
            <div className="product-details">
                <h6 className="brand">Havles</h6>
                <h5 className="product-tittle">
                    Smartwathc Series e200 para Niños
                </h5>
                <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    edit={false}
                    activeColor="#ffd700"
                />
                <p className={` description ${grid === 12 ? "d-block" : "d-none"}`}>
                ¡Descubre el "Smartwatch Apex"! Un reloj inteligente de vanguardia con estilo y funcionalidad excepcionales. Mantente conectado, monitorea tu salud y disfruta de una batería de larga duración. ¡El compañero perfecto para tu vida activa y elegante!
                </p>
                <p className="price">
                    $100.00
                </p>
            </div>
            <div className="action-bar position-absolute">
                <div className='d-flex flex-column'>
                    <Link><MdCompareArrows size={18} color="black"/></Link>
                </div>
                <div className='d-flex flex-column'>
                    <Link><AiOutlineEye size={18} color="black"/></Link>
                </div>
                <div className='d-flex flex-column'>
                    <Link><BsBag  size={18} color="black"/></Link>
                </div>
            </div>
        </Link>
        </div>
    </>
  )
}

export default ProductCard