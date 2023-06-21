import React, { useEffect } from 'react'
import BreadCrum from '../components/BreadCrum'
import { Helmet } from "react-helmet";
import Meta from '../components/Meta';
import watch from "../images/watch.jpg"
import { AiFillDelete } from "react-icons/ai"
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import { useDispatch, useSelector } from 'react-redux';
import { getUserCart } from '../features/products/userSlice';
import { useState } from 'react';
const Cart = () => {


    const dispatch = useDispatch();
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(items);
    }, []);

    const handleDeleteItem = (valoration) => {
        const updatedCart = cartItems.filter(item => item.valoration !== valoration);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
      
        // Actualizar la cantidad de elementos en el carrito
        const itemCount = updatedCart.length;
        setCartItemCount(itemCount);
      
        // Actualizar el precio total del carrito
        let totalPrice = 0;
        updatedCart.forEach(item => {
          totalPrice += item.price * item.quantity;
        });
        setCartTotalPrice(totalPrice);
        window.dispatchEvent(new Event('cartUpdated'));

      };

    const totalPrice = cartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
    return (
        <>
            <Meta title={"Carro"} />
            <BreadCrum title='Carro' />
            <Container class1="home-wrapper-2 py-5 cart-wrapper">
                <div className="row">
                    <div className="col-12">
                        <div className="py-3 d-flex justify-content-between align-items-center cart-header">
                            <h4 className='cart-col-1'>Productos</h4>
                            <h4 className='cart-col-2'>Precio</h4>
                            <h4 className='cart-col-3'>Cantidad</h4>
                            <h4 className='cart-col-4'>Total</h4>

                        </div>


                        {
                            cartItems && cartItems?.map((item, index) => {
                                return (
                                    <div key={index} className="py-3  mb-2 d-flex justify-content-between align-items-center cart-data">
                                        <div style={{ gap: '15px' }} className='cart-col-1 d-flex align-items-center'>
                                            <div className='w-25'>
                                                <img src={item?.imagen} className='img-fluid' alt="reloj" />
                                            </div>
                                            <div className='w-75'>
                                                <p> {item?.nombre} </p>
                                                <p>Size: asdasdasd</p>
                                                <p>Size: asdasdasd</p>
                                            </div>
                                        </div>
                                        <div className='cart-col-2'>
                                            <h5 className="price">{item?.price}</h5>
                                        </div>
                                        <div className='cart-col-3 d-flex align-items-center' style={{ gap: '15px' }}>
                                            <div>
                                                <input value={item?.quantity} type="number" className='form-control' min={1} max={10} onChange={(e) => {
                                                    const updatedCart = [...cartItems];
                                                    const updatedItem = { ...item };
                                                    updatedItem.quantity = parseInt(e.target.value, 10);
                                                    updatedCart[index] = updatedItem;
                                                    setCartItems(updatedCart);
                                                    localStorage.setItem('cart', JSON.stringify(updatedCart));
                                                }} />
                                            </div>
                                            <div>
                                                <AiFillDelete style={{ cursor: 'pointer' }} onClick={() => {
                                                    handleDeleteItem(item?.valoration)
                                                }} className='text-danger ' />
                                            </div>
                                        </div>
                                        <div className='cart-col-4'>
                                            <h5 className="price"> {Math.floor(item?.price) * Math.floor(item?.quantity)} </h5>

                                        </div>

                                    </div>
                                )
                            })
                        }


                    </div>
                    <div className="col-12 py-12 mt-4">
                        <div className="d-flex justify-content-between align-items-baseline">
                            <Link to="/product" className='button'>Seguir la compra</Link>
                            <div className='d-flex  flex-column align-items-end'>
                                <h4>Subtotal: $ {totalPrice}  </h4>
                                <p>Impuestos incluidos</p>
                                <Link to="/checkout" className='button'>Fianlizar comprar</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Cart