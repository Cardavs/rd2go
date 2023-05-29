import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import Color from '../components/Color'

const CompareProduct = () => {
  return <>
    <Meta title={"Comparar Productos"}/>
        <BreadCrumb title="Comparar Productos"/>
        <div className="compare-product-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-3">
                        <div className="compare-product-card position-relative">
                            <img 
                            src="images/cross.svg" 
                            alt="cross" 
                            className="position-absolute cross img-fluid" />
                            <div className="product-card-image">
                                <img src="images/watch.jpg" alt="watch" />
                            </div>
                            <div className="compare-product-details">
                                <h5 className="title">Reloj estéreo de alta fidelidad "SoundWave"</h5>
                                <h6 className="price mb-3 mt-3">$ 1559.99</h6>
                                <div>
                                    <div className="product-detail">
                                        <h5>Marca:</h5>
                                        <p>SoundWave</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Tipo:</h5>
                                        <p>Reloj</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Disponibilidad:</h5>
                                        <p>En Stock:</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Color:</h5>
                                        <Color />
                                    </div>
                                    <div className="product-detail">
                                        <h5>Size:</h5>
                                        <div className="d-flex gap-10">
                                            <p>S</p>
                                            <p>M</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="compare-product-card position-relative">
                            <img 
                            src="images/cross.svg" 
                            alt="cross" 
                            className="position-absolute cross img-fluid" />
                            <div className="product-card-image">
                                <img src="images/watch.jpg" alt="watch" />
                            </div>
                            <div className="compare-product-details">
                                <h5 className="title">Reloj estéreo de alta fidelidad "SoundWave"</h5>
                                <h6 className="price mb-3 mt-3">$ 1559.99</h6>
                                <div>
                                    <div className="product-detail">
                                        <h5>Marca:</h5>
                                        <p>SoundWave</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Tipo:</h5>
                                        <p>Reloj</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Disponibilidad:</h5>
                                        <p>En Stock:</p>
                                    </div>
                                    <div className="product-detail">
                                        <h5>Color:</h5>
                                        <Color />
                                    </div>
                                    <div className="product-detail">
                                        <h5>Size:</h5>
                                        <div className="d-flex gap-10">
                                            <p>S</p>
                                            <p>M</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </>
}

export default CompareProduct