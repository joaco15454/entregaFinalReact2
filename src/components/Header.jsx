import React, { useEffect, useState } from 'react';

import { NavLink, Link, useNavigate } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import { useSelector } from 'react-redux';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';




const Header = () => {
  const [cartItemCount, setCartItemCount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(null)
  const [cartItems, setCartItems] = useState([]);
  const authState = useSelector(state => state.auth)
  const [paginate, setPaginate] = useState(true);
  const [productOpt, setProductOpt] = useState([])
const productState = useSelector(state=> state?.product?.product) 
const navigate = useNavigate()
  useEffect(() => {

    const items = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(items);



  }, []);
  useEffect(() => {
    let sum = 0;

    for (let index = 0; index < cartItems?.length; index++) {
      sum += Number(cartItems[index].quantity) * cartItems[index].price

    } setTotalAmount(sum)
  }, [cartItems])

  useEffect (() => {
    let data=[]
    for (let index = 1; index < productState.length; index++) {
      const element = productState[index];
      
      data.push({valoration:index, prod:element?.valoration,nombre:element?.nombre})
    }
    setProductOpt(data)
  }, [productState])

  const handleLogout = () => {
    localStorage.clear()
    window.location.reload()
  }


  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className='text-white mb-0'>Envios gratis desde 100000$</p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">Numero contacto: <a href="tel:54 7777777" className="text-white">54 7777777 </a></p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className='text-white logoHer'>DevDur</Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group ">
                <Typeahead
                  id="pagination-example"
                  onPaginate={() => console.log('Results paginated')}
                  onChange={(selected) => {
                    
                    navigate(`/product/${selected[0].valoration} `)
                  }}
                  options={productOpt}

                  labelKey={"nombre"}
                  paginate={paginate}
                  placeholder="Busca tus productos aqui"
                />             
               <span className="input-group-text p-3" id="basic-addon2"> <BsSearch className='fs-6' /> </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link to='/compare-product' className='d-flex align-items-center text-white' style={{ gap: '10px' }}>
                    <img src="images/compare.svg" alt="compare" />
                    <p className='mb-0'>
                      Comparar productos
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to='/wishlist' className='d-flex align-items-center text-white' style={{ gap: '10px' }}>
                    <img src="images/wishlist.svg" alt="wishlist" />
                    <p className='mb-0'>Favoritos</p>
                  </Link>
                </div>
                <div>
                  <Link to={authState?.createdUser?.firstname === undefined ? '/login' : ""} className='d-flex align-items-center text-white' style={{ gap: '10px' }}>
                    <img src="images/user.svg" alt="user" />
                    {
                      authState?.createdUser?.firstname === undefined ? <p className='mb-0'>
                        Inicia sesion
                      </p> : <p className='mb-0'>
                        Bienvenido! {authState?.createdUser?.firstname}
                      </p>
                    }
                  </Link>
                </div>
                <div>
                  <Link to='/cart' className='d-flex align-items-center text-white' style={{ gap: '10px' }}>
                    <img src="images/cart.svg" alt="cart" />
                    <div className='d-flex flex-column' style={{ gap: '10px' }}>
                      <span className='badge bg-white text-dark'>
                        {cartItems.length}
                      </span>
                      <p className='mb-0'>${totalAmount}</p>
                    </div>
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </div>
      </header>
      <header className='header-bottom py-3'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu_bottom d-flex align-items-center" style={{ gap: '30px' }}>
                <div>
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex align-items-center  " style={{ gap: '15px' }} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src='images/menu.svg' alt='menu' /> <span className='me-5 d-inline-block'>Categorias</span>

                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><Link className="dropdown-item text-white" to="">Action</Link></li>
                      <li><Link className="dropdown-item text-white" to="">Another action</Link></li>
                      <li><Link className="dropdown-item text-white" to="">Something else here</Link></li>
                    </ul>
                  </div>
                </div>
                <div className='menu-links'>
                  <div className="d-flex align-items-center " style={{ gap: '15px' }}>
                    <NavLink to="/">Inicio</NavLink>
                    <NavLink to="/product">Tienda</NavLink>

                    <NavLink to="/blogs">Novedades</NavLink>
                    <NavLink to="/contact">Contacto</NavLink>
                    <button onClick={handleLogout} type='button' className="border border-0 bg-transparent text-white text-uppercase">Cerrar sesion</button>
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