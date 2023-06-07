import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs';
import { AiOutlineUser, AiOutlineShoppingCart, AiOutlineMenu  } from 'react-icons/ai';

const Header = () => {
  return (
    <>
      <header className="header-top-strip">
        <div className="xxl-container">
          <div className="line">
            <div className="fifty-fifty-col">
              <p className="deliveries">Entregas gratis a partir de $2000 y Devoluciones Gratis</p>
            </div>
            <div className="fifty-fifty-col">
                <p className="atention">Atención a Clientes: <a className="contact-number" href="tel:+23 5578096513"> +23 5578096513</a></p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper">
        <div className="second-header">
          <div className="second-header-items">
            <div className="logo">
              <h2>
              <Link className="link-style">RD2GO</Link>
              </h2>
            </div>
            <div className="search">
              <div className="input-group">
                <input 
                type="text" 
                className="form-control" 
                placeholder="Buscar Producto Aqui..." 
                aria-label="Buscar Producto Aqui..." 
                aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2"><BsSearch className="search-label"/></span>
              </div>
            </div>
            <div className="cart-container">
                <div className='cart'>
                  <Link to="/cart" className="link-cart">
                    <AiOutlineShoppingCart size={36} />
                    <div className="cart-text-container">
                      <span className="span-cart">0</span>
                      <p className="cart-price">$ 500</p>
                    </div>
                  </Link>
                </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom">
        <div className="xxl-container">
          <div className="line">
            <div className="bottom-container">
                <div className="menu-bottom">
                  <div>
                    <div className="dropdown">
                      <button className="btn dropdown-toggle" 
                      type="button" 
                      id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <AiOutlineMenu size={32} />
                        <span className="categories-header">Categorías</span>
                      </button>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li>
                          <Link className="dropdown-item text-white" to="">Action</Link>
                        </li>
                        <li>
                          <Link className="dropdown-item text-white" to="">Another action</Link>
                        </li>
                        <li>
                          <Link className="dropdown-item text-white" to="">Something else here</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="menu-links">
                    <div className="menu-options">
                      <NavLink to="/">Home</NavLink>
                      <NavLink to="/product">Nuestra Tienda</NavLink>
                      <NavLink to="/contact">Contactanos</NavLink>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header