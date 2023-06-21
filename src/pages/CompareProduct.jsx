import React from 'react'
import BreadCrum from '../components/BreadCrum'
import { Helmet } from "react-helmet";
import Meta from '../components/Meta';
import Container from '../components/Container';
const CompareProduct = () => {
    return (
        <>
            <Meta title={"Comparar productos"} />
            <BreadCrum title='Comparar productos' />
            <Container class1="compare-product-wrapper py-5 home-wrapper-2">
                    <div className="row">
                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                                <img src="images/cross.svg" alt="cross" className="img-fluid cross position-absolute" />
                                <div className="product-card-image">
                                    <img src="images/watch.jpg" alt="" />
                                </div>
                                <div className="compare-product-details">
                                    <h5 className="title">Laptot moderna</h5>
                                    <h6 className="price mb-3 mt-3">$100</h6>
                                    <div>
                                        <div className="product-details">
                                            <h5>Modelo:</h5>
                                            <p>Samsung</p>
                                        </div>
                                        <div className="product-details">
                                            <h5>Tamaño</h5>
                                            <div className="d-flex" style={{gap:'10px'}}>
                                                <p>S</p>
                                                <p>M</p>
                                            </div>
                                        </div>
                                        <div className="product-details">
                                            <h5>Modelo:</h5>
                                            <p>Laptop</p>
                                        </div>
                                        <div className="product-details">
                                            <h5>Disponibilidad:</h5>
                                            <p>Disponibe</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="compare-product-card position-relative">
                                <img src="images/cross.svg" alt="cross" className="img-fluid cross position-absolute" />
                                <div className="product-card-image">
                                    <img src="images/watch.jpg" alt="" />
                                </div>
                                <div className="compare-product-details">
                                    <h5 className="title">Laptot moderna</h5>
                                    <h6 className="price mb-3 mt-3">$100</h6>
                                    <div>
                                        <div className="product-details">
                                            <h5>Modelo:</h5>
                                            <p>Samsung</p>
                                        </div>
                                        <div className="product-details">
                                            <h5>Tamaño</h5>
                                            <div className="d-flex" style={{gap:'10px'}}>
                                                <p>S</p>
                                                <p>M</p>
                                            </div>
                                        </div>
                                        <div className="product-details">
                                            <h5>Modelo:</h5>
                                            <p>Laptop</p>
                                        </div>
                                        <div className="product-details">
                                            <h5>Disponibilidad:</h5>
                                            <p>Disponibe</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </Container>
        </>
    )
}

export default CompareProduct