import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs';
import { MdCompareArrows } from 'react-icons/md';
import { BsHeartHalf } from 'react-icons/bs';
import { AiOutlineUser, AiOutlineShoppingCart, AiOutlineMenu  } from 'react-icons/ai';

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">Entregas gratis a partir de $2000 y Devoluciones Gratis</p>
            </div>
            <div className="col-6">
                <p className="text-end text-white mb-0">Atención a Clientes: <a className="text-white" href="tel:+23 5578096513"> +23 5578096513</a></p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2 className="mb-0">
                <Link className="text-white">RD2GO</Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input 
                type="text" 
                className="form-control" 
                placeholder="Buscar Producto Aqui..." 
                aria-label="Buscar Producto Aqui..." 
                aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2"><BsSearch className="fs-6"/></span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div className="ms-auto">
                  <Link to="/login" className="d-flex align-items-center gap-10 text-white">
                    <AiOutlineUser size={36} />
                    <p className="mb-0">Login <br /> Mi Cuenta</p>
                  </Link>
                </div>
                <div>
                  <Link to="/cart" className="d-flex align-items-center gap-10 text-white">
                    <AiOutlineShoppingCart size={36} />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">$ 500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
                <div className="menu-bottom d-flex align-items-center gap-30">
                  <div>
                    <div className="dropdown">
                      <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" 
                      type="button" 
                      id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <AiOutlineMenu size={32} />
                        <span className="me-5 d-inline-block">Categorías</span>
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
                    <div className="d-flex align-items-center gap-15">
                      <NavLink to="/">Home</NavLink>
                      <NavLink to="/product">Nuestra Tienda</NavLink>
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