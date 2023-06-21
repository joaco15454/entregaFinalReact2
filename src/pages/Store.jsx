import React, { useEffect, useState } from 'react'
import BreadCrum from '../components/BreadCrum'
import { Helmet } from "react-helmet";
import Meta from '../components/Meta';
import ReactStars from "react-rating-stars-component"
import ProductCard from '../components/ProductCard'
import Container from '../components/Container';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../features/products/productSlice';
const Store = () => {
  const [grid,setGrid] = useState(4)
  const productState = useSelector((state) => state.product.product);
  
  const [brands, setBrands] = useState([])

  useEffect (() => {
    let newBrands = []
   
    for (let index = 0; index < productState.length; index++) {
      const element = productState[index];
      newBrands.push({brand:element.brand})
    }
    setBrands(newBrands)
  }, [productState])
  console.log(brands);
  const dispatch = useDispatch()
  useEffect(() => {
    getProducts()
  }, [] )
  const getProducts = () => {
    dispatch(getAllProducts());
  }
  

  const [minPrice, setMinPrice] = useState(null)
  const [maxPrice, setMaxPrice] = useState(null)

  return (
    <>
      <Meta title={"Tienda"} />
      <BreadCrum title='Tienda' />
      <Container class1="store-wrapper home-wrapper-2 py-5">
       
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3" >
                <h3 className="filter-title">
                  Comprar por categoria
                </h3>
                <div>
                  <ul className="ps-4">
                    <li>Relojes</li>
                    <li>TV</li>
                    <li>Camaras</li>
                    <li>Laptops</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3" >
                <h3 className="filter-title">
                  Filtrar                </h3>

                <div>
                  <h5 className="subtitle">
                    Disponible
                  </h5>
                  <div>
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" />
                      <label htmlFor="" className="form-check-label">En stock</label>
                    </div>
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" />
                      <label htmlFor="" className="form-check-label">Fuera de stock</label>
                    </div>
                  </div>
                  <h5 className="subtitle">Precio</h5>

                </div>
                <div className="d-flex align-items-center" style={{ gap: '10px' }}>
                  <div className="form-floating ">
                    <input type="email" className="form-control" id="floatingInput" placeholder="Desde" />
                    <label htmlFor="floatingInput " className='input-price'>Desde</label>
                  </div>
                  <div className="form-floating ">
                    <input type="email" className="form-control" id="floatingInput" placeholder="Hasta" />
                    <label htmlFor="floatingInput "  className='input-price'>Hasta</label>
                  </div>
                </div>
                <h5 className="subtitle">Size</h5>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" />
                    <label htmlFor="" className="form-check-label">S(2)</label>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" />
                    <label htmlFor="" className="form-check-label">M(2)</label>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" />
                    <label htmlFor="" className="form-check-label">L(2)</label>
                  </div>
                </div>

              </div>
              <div className="filter-card mb-3" >
                <h3 className="filter-title">Product TAGS</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center" style={{ gap: '5px' }}>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Auriculares</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Laptop</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Celulares</span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Wire</span>
                  </div>
                </div>
              </div>
              {/*<div className="filter-card mb-3" >
                <h3 className="filter-title">
                  Producto random
                </h3>
                <div>
                  <div className="random-products mb-3 d-flex">
                    <div className="w-50">
                      <img src="images/watch.jpg" className='img-fluid' alt="" />
                    </div>
                    <div className="w-50">
                      <h5>Auriculares 10 colores</h5>
                      <ReactStars
                        count={5}
                        value={3}
                        edit={false}
                        size={24}
                        activeColor="#ffd700"
                      />
                      <b>$300</b>
                    </div>
                  </div>
                  {<div className="random-products d-flex">
                    <div className="w-50">
                      <img src="images/watch.jpg" className='img-fluid' alt="" />
                    </div>
                    <div className="w-50">
                      <h5>Auriculares 10 colores</h5>
                      <ReactStars
                        count={5}
                        value={3}
                        edit={false}
                        size={24}
                        activeColor="#ffd700"
                      />
                      <b>$300</b>
                    </div>
  </div>}
                </div>
  </div>*/}

            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center" style={{gap:'10px'}}>
                    <p className="mb-0 d-block" style={{width:'150px'}}>Ordenar por:</p>
                    <select name=""  defaultValue={"mas-vendido"} className='form-control form-select' id="">
                      
                      <option value="mas-vendido">Mas vendidos</option>
                      <option value="titulo-ascendente">ALFABETICO A-Z</option>
                      <option value="titulo-ascendente">ALFABETO Z-A</option>
                      <option value="precio-descendete">Precio descendente</option>
                      <option value="precio-ascendete">Precio ascendente</option>

                    </select>
                </div>
                <div className="d-flex align-items-center grid" style={{gap:'10px'}}>
                    <p className="totalproducts mb-0  ">21 products</p>
                    <div className="d-flex align-items-center" style={{gap:'10px'}}>

                        <img onClick={() => {setGrid(6)}} src="images/gr3.svg" className='d-block img-fluid' alt="grid" />
                        <img onClick={() => {setGrid(12)}} src="images/gr.svg" className='d-block img-fluid' alt="grid" />

                    </div>
                </div>
                </div>
              </div>
              <div className="products-list pb-5">
                  <div className="d-flex flex-wrap" style={{gap:'10px'}}>
                  <ProductCard data={productState} grid={grid}/>
                  </div>
              </div>
            </div>
          </div>
    
      </Container>


    </>
  )
}

export default Store