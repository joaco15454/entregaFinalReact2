import React from 'react'
import ReactStars from "react-rating-stars-component"
import { useDispatch } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { addToWishList } from '../features/products/productSlice'
const ProductCard = (props) => {
    const { grid, data } = props
    const dispatch = useDispatch();
    let location = useLocation();
    const addToWish = (id) => {
       
        dispatch(addToWishList(id))
    }
  
    if (!Array.isArray(data)) {
        return null; // O muestra un mensaje de error adecuado en su lugar
      }
    
    return (
        
        <>
             {
               data.map((item, index) => {
                    return (
                        <div 
                        key={index}
                        className={`${location.pathname == "/product" ? `gr-${grid}` : "col-3"
                            }`}>
                            <div  className="product-card position-relative">
                                
                                <div className="product-image">
                                    <img src={item?.imagen} className='img-fluid d-block mx-auto w-100' alt="product image" />
                                 

                                </div>
                                <div className="product-details">
                                    <h6 className='brand'>
                                        Havels
                                    </h6>
                                    <h5 className="product-title">
                                        {item.nombre}
                                    </h5>
                                    <ReactStars
                                        count={5}
                                        value={3}
                                        edit={false}
                                        size={24}
                                        activeColor="#ffd700"
                                    />
                                    <p className={`description ${grid === 12 ? "d-block" : "d-none"} `} >
                                        {item?.descripcion}
                                        </p>

                                    <p className="price">$100.00</p>
                                </div>
                                <div className="action-bar position-absolute">
                                    <div className='d-flex flex-column' style={{ gap: '15px' }}>
                                        
                                        <Link to={'/product/'+item?.valoration} className='border-0 bg-transparent'>
                                            <img src="images/view.svg" alt="addcart" />
                                        </Link>
                                        <button className='border-0 bg-transparent'>
                                            <img src="images/add-cart.svg" alt="addcart" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }


        </>
    )
}

export default ProductCard