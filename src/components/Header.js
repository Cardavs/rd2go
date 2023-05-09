import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'

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
      <header className="header-uper py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-2">
              <h2>
                <Link className="text-white">RD2GO</Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group mb-3">
                <input 
                type="text" class="form-control" 
                placeholder="Buscar Producto Aqui..." 
                aria-label="Buscar Producto Aqui..." 
                aria-describedby="basic-addon2"
                />
                <span class="input-group-text" id="basic-addon2"><BsSearch /></span>
              </div>
            </div>
            <div className="col-5"></div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header