import React, { useEffect } from 'react'
import BreadCrum from '../components/BreadCrum'
import { Helmet } from "react-helmet";
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import watch from "../images/watch.jpg"
import Container from '../components/Container';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup'


const envioSchema = yup.object({
    nombre: yup.string().required("El nombre es requerido"),
    apellido: yup.string().required("El apellido es requerido"),
    direccion:yup.string().required("La direccion es requerida es requerido"),
    provincia: yup.string().required("Su provincia es requerido"),
    pais: yup.string().required("Su pais es requerido"),
    codigoPostal: yup.string().required("El codigo postal es requerido"),
  });
  


const Checkout = () => {
    const dispatch = useDispatch();
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(null)
    const [envioInfo, setEnvioInfo] = useState(null)
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(items);
    }, []);


    useEffect(() => {
        let sum= 0;
        for (let index = 0; index< cartItems?.length; index++) {
            sum+= Number(cartItems[index].quantity) * cartItems[index].price
        }setTotalAmount(sum)
    }, [cartItems])
  
    

    const formik = useFormik({
        initialValues: {
            nombre: "",
            apellido: "",
            direccion:"",
            provincia: "",
            pais: "",
            codigoPostal: "",
        },
        validationSchema: envioSchema,
        onSubmit: value => {
          scheck
        },
      });




    return (
        <><Meta title={"Checkout"} />
            <BreadCrum title='Checkout' />

            <Container class1="checkout-wrapper py-5 home-wrapper-2">
                    <div className="row">
                        <div className="col-7">
                            <h3 className="website-name">EntreFinalReact</h3>
                            <nav style={{ "--bs-breadcrumb-divider:": ">" }} aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/cart" href="#">Cart</Link></li> &nbsp;/
                                    <li className="breadcrumb-item active" aria-current="page">Informacion</li>

                                </ol>
                            </nav>
                            <h4 className="title">
                                Informacion de contacto
                            </h4>
                            <p className="user-details">mailfalso123@gmail.com</p>
                            <form   onSubmit={formik.handleSubmit} action="" className='d-flex flex-wrap justify-content-between' style={{ gap: '15px' }}>
                                <div className='w-100'>
                                    <select name="pais"value={formik.values.pais} onChange={formik.handleChange("pais")} onBlur={formik.handleBlur("pais")}  className='form-control form-select' id="">
                                        <option select disabled>Selecciona tu pais</option>
                                    
                                        <option value="Argentina">Argentina</option>
                                        <option  value="Uruguay" >Uruguay</option>
                                    </select>
                                     <div className="error ms-2 my-1">
                                        {
                                            formik.touched.pais && formik.errors.pais
                                        }
                                    </div>
                                </div>
                                <div 
                                className='flex-grow-1'>
                                    <input type="text" placeholder='Ingrese su nombre' className='form-control'
                                    name="nombre "value={formik.values.nombre} onChange={formik.handleChange("nombre")} onBlur={formik.handleBlur("nombre")}
                                    />
                                </div>
                                 <div className="error ms-2 my-1">
                                        {
                                            formik.touched.nombre && formik.errors.nombre
                                        }
                                    </div>
                                <div className='flex-grow-1'>
                                    <input type="text" placeholder='Ingrese su apellido' className='form-control' 
                                    
                                    name="apellido "value={formik.values.apellido} onChange={formik.handleChange("apellido")} onBlur={formik.handleBlur("apellido")}
                                    />
                                </div>
                                <div className="error ms-2 my-1">
                                        {
                                            formik.touched.apellido && formik.errors.apellido
                                        }
                                    </div>
                                <div className='w-100'>
                                    <input type="text" className='form-control' placeholder='Ingrese su localidad' 
                                    
                                    name="localidad "value={formik.values.localidad} onChange={formik.handleChange("localidad")} onBlur={formik.handleBlur("localidad")}
                                    />
                                </div>
                                <div className="error ms-2 my-1">
                                        {
                                            formik.touched.localidad && formik.errors.localidad
                                        }
                                    </div>
                                <div className='w-100'>
                                    <input type="text" className='form-control' placeholder='Ingrese su piso y departamento' 
                                    
                                    
                                    /></div>
                                <div className='flex-grow-1'>
                                    <input type="text" className="form-control" placeholder='Ingrese su ciudad' 
                                    
                                    />
                                </div>
                                <div className='flex-grow-1'>
                                    <select name="" value={formik.values.provincia} onChange={formik.handleChange("provincia")} onBlur={formik.handleBlur("provincia")}  className='form-control form-select' id="">
                                        <option value="" selected disabled> Seleccione su provincia </option>
                                        <option value="Buenos Aires">Buenos Aires</option>
                                        <option  value="Chaco" >Chaco</option>
                                    </select>

                                </div>
                                <div className='flex-grow-1'>
                                    <input type="text" placeholder='Ingrese su codigo postal' className="form-control" 
                                    
                                    name="codigoPostal "value={formik.values.codigoPostal} onChange={formik.handleChange("codigoPostal")} onBlur={formik.handleBlur("codigoPostal")}
                                    />
                                </div>
                                <div className="error ms-2 my-1">
                                        {
                                            formik.touched.codigoPostal && formik.errors.codigoPostal
                                        }
                                    </div>
                                <div className="w-100">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <Link to="/cart" className='text-dark'>Volver al carro</Link>
                                        <Link to="/cart" className='button'>Sigue a la compra</Link>
                                        <button className='button' type='submit' >Compra ahora</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-5">
                            <div className='border-bottom py-4'>
                                {
                                    cartItems && cartItems?.map((item,index) => {
                                        return (<div key={index} className="d-flex align-items-center mb-2" style={{gap:'10px'}}>
                                        <div className='w-75 d-flex ' style={{gap:'10px'}}>
                                            <div className='w-25 position-relative'>
                                                <span className="badge bg-secondary text-white rounded-circle p-2 position-absolute" style={{top:'-20px', right:'2px'}} > {item?.quantity} </span>
                                                <img className='img-fluid' src={item?.imagen} alt="" />
        
                                            </div>
                                            <div>
                                                <h5 className="total-price"> {item?.nombre}</h5>
                                                <p className='total-price'> $ {item?.price}</p>
                                            </div>
                                        </div>
                                        <div className='flex-grow-q'>
                                            <h5> $ {item?.price * item?.quantity} </h5>
                                        </div>
        
                                        </div>)
                                    })
                                }
                                
                            </div>
                            <div className='border-bottom py-4'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p  className='mb-0 total'>Subtotal</p>
                                    <p className='mb-0 total-PRICE'>$  {totalAmount?totalAmount :'0'}</p>
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p className='mb-0  total'>Envio</p>
                                    <p className='mb-0 total-price'>$ 1000</p>
                                </div>
                            </div>

                            <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
                                <h4 className='total'> Total</h4>
                                <h5 className='total-price'>$  {totalAmount?totalAmount + 1000:'0'} </h5>
                            </div>

                        </div>
                    </div>
            </Container>

        </>


    )
}

export default Checkout