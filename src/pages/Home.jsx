import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Marquee from "react-fast-marquee"
import BlogCard from '../components/BlogCard'
import ProductCard from '../components/ProductCard'
import SpecialProduct from '../components/SpecialProduct'
import Container from '../components/Container'
import { services } from '../utils/Data'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../features/products/productSlice'
import ReactStars from "react-rating-stars-component"
const Home = () => {
  const productState = useSelector((state => state.product.product))

  const navigate = useNavigate()

  useEffect(() => {
    getallProducts()
  }, [])

  const dispatch = useDispatch();
  const getallProducts = () => {
    dispatch(getAllProducts())
  }
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img src="images/main-banner-1.jpg" className='img-fluid rounded-3 img-banner' alt="banner principal" />
              <div className="main-banner-content position-absolute">
                <h4>Grandes ofertas</h4>
                <h5>IPHONE S13+ Pro</h5>
                <p>Desde 455555#</p>
                <Link className='button'>COMPRA AHORA</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap justify-content-between align-items-center" style={{ gap: '10px' }}>
              <div className="small-banner position-relative">
                <img src="images/catbanner-01.jpg" className='img-fluid rounded-3' alt="banner principal" />
                <div className="small-banner-content position-absolute">
                  <h4>Grandes ofertas</h4>
                  <h5>IPHONE S13+ Pro</h5>
                  <p>Desde 455555#</p>

                </div>
              </div>
              <div className="small-banner position-relative">
                <img src="images/catbanner-02.jpg" className='img-fluid rounded-3' alt="banner principal" />
                <div className="small-banner-content position-absolute">
                  <h4>Mejor llegado</h4>
                  <h5>Compra este relejo</h5>
                  <p>Desde 455555#</p>

                </div>
              </div>
              <div className="small-banner position-relative">
                <img src="images/catbanner-03.jpg" className='img-fluid rounded-3' alt="banner principal" />
                <div className="small-banner-content position-absolute">
                  <h4>Recien llegado</h4>
                  <h5>Compra este relejo</h5>
                  <p>Desde 455555#</p>

                </div>
              </div>
              <div className="small-banner position-relative">
                <img src="images/catbanner-04.jpg" className='img-fluid rounded-3' alt="banner principal" />
                <div className="small-banner-content position-absolute">
                  <h4>Recien llegado</h4>
                  <h5>Compra este relejo</h5>
                  <p>Desde 455555#</p>

                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
      <Container class1="home-wrapper-2-py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">

              {
                services?.map((i, j) => {
                  return (
                    <div className="d-flex align-items-center" key={j} style={{ gap: '15px' }}>
                      <img src={i.image} className='img-condiciones' alt="" />
                      <div className='condiciones'>
                        <h6>{i.title}</h6>
                        <p className="mb-0">{i.tagline}</p>
                      </div>
                    </div>
                  )
                }

                )}

            </div>
          </div>
        </div>
      </Container>
      

      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">
              Nuestras colecciones
            </h3>
          </div>
          {
            productState && productState?.map((item, index) => {


              return (
                <div
                  key={index}
                  className= "col-3 special"
                   >
                  <div className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                      <button className='border-0 bg-transparent' onClick={(e) => {
                        addToWish(item?.valoration)
                      }} ><img src="images/wish.svg" alt="wish" /></button>
                    </div>
                    <div className="product-image">
                      <img src={item?.imagen} className='img-fluid d-block mx-auto w-100 ' alt="product image" />


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
                      

                      <p className="price">$100.00</p>
                    </div>
                    <div className="action-bar position-absolute">
                      <div className='d-flex flex-column' style={{ gap: '15px' }}>
                        <button className='border-0 bg-transparent'>
                          <img src="images/prodcompare.svg" alt="compare" />
                        </button>
                        <button className='border-0 bg-transparent'>
                          <img  onClick={() => navigate("/product/" + item?.valoration)}  src="images/view.svg" alt="addcart" />
                        </button>
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
        </div>
      </Container>

      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/famous.webp" className='img-fluid' alt="famous" />
              <div className="famous-content position-absolute">
                <h5>Pantalla grande</h5>
                <h6>Smart Watch</h6>
                <p>Desde $05i203429</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/famous-2+.webp" className='img-fluid' alt="famous" />
              <div className="famous-content position-absolute">
                <h5 className='text-dark'>Studio display</h5>
                <h6 className='text-dark'>600px de brillo</h6>
                <p className='text-dark'>Desde $05i203429</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/famous-3.webp" className='img-fluid' alt="famous" />
              <div className="famous-content position-absolute">
                <h5 className='text-dark'>Smartphone display</h5>
                <h6 className='text-dark'>Iphone 15</h6>
                <p className='text-dark'>Desde $05i203429</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/famous-4.webp" className='img-fluid' alt="famous" />
              <div className="famous-content position-absolute">
                <h5 className='text-dark'>Parlantes display</h5>
                <h6 className='text-dark'>Parlantes</h6>
                <p className='text-dark'>Desde $05i203429</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">
              Productos especiales
            </h3>
          </div>
          <div className="row" >
            {
              productState && productState?.map((item, index) => {

                if (item.valoration < 5) {
                  return <SpecialProduct key={index}
                    title={item?.nombre}
                    valoration={item?.valoration}
                    price={item?.price}
                    image={item?.imagen}
                    id={item?.valoration}  
                  />
                }


              })
            }



          </div>
        </div>
      </Container>



      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">
              Nuestros productos mas populares
            </h3>
          </div>

        </div>
        <div className="row">

          {
            productState && productState?.map((item, index) => {


              return (
                <div
                  key={index}
                  className= "col-3"
                   >
                  <div  className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                      <button className='border-0 bg-transparent' onClick={(e) => {
                        addToWish(item?.valoration)
                      }} ><img src="images/wish.svg" alt="wish" /></button>
                    </div>
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
                      

                      <p className="price">$100.00</p>
                    </div>
                    <div className="action-bar position-absolute">
                      <div className='d-flex flex-column' style={{ gap: '15px' }}>
                        <button className='border-0 bg-transparent'>
                          <img src="images/prodcompare.svg" alt="compare" />
                        </button>
                        <button className='border-0 bg-transparent'>
                          <img  onClick={() => navigate("/product/"+item?.valoration)} src="images/view.svg" alt="addcart" />
                        </button>
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


        </div>
      </Container>

      <Container class1='marque-wrapper py-5'>
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className='d-flex'>
                <div className='mx-4 w-25'>
                  <img src="images/brand-01.png" className='img-marquee'  alt="brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-02.png" className='img-marquee' alt="brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-03.png" className='img-marquee' alt="brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-04.png" className='img-marquee' alt="brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className='mx-4 w-25'>
                  <img src="images/brand-06.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">
              Ultimos blogs
            </h3>
          </div>

        </div>
        <div className="row sd">
          <div className="col-3">
            <BlogCard />

          </div>
          <div className="col-3">
            <BlogCard />

          </div>
          <div className="col-3">
            <BlogCard />

          </div>
          <div className="col-3">
            <BlogCard />

          </div>
        </div>
        <div className="col ds">
          <div className="row-3">
            <BlogCard />

          </div>
          <div className="row-3">
            <BlogCard />

          </div>
          <div className="row-3">
            <BlogCard />

          </div>
          <div className="row-3">
            <BlogCard />

          </div>
        </div>
      </Container>

    </>
  )
}

export default Home