import React, { useEffect } from 'react'
import BreadCrum from '../components/BreadCrum'
import { Helmet } from "react-helmet";
import Meta from '../components/Meta';
import Container from '../components/Container';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProductWishList } from '../features/products/userSlice';
const Wishlist = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        getWishlistFromDb()
    }, [])
    const getWishlistFromDb = () => {
        dispatch(getUserProductWishList)
    };
    const wishlistState = useSelector(state=>state.auth.wishlist)
    return (
        <>
            <Meta title={"Favoritos"} />
            <BreadCrum title='Favoritos' />
            <Container className="wishlist-wrapper">
                    <div className="row">
                        <div className="col-3">
                            <div className="position-relative wishlist-card">
                                <img src="images/cross.svg" alt="cross" className="img-fluid cross position-absolute" />

                                <div className="wishlist-card-image">
                                    <img src="images/watch.jpg" className='w-100 img-fluid' alt="" />
                                </div>
                                <div className="py-3 px-3">
                                    <h5 className="title">RelojPiola</h5>
                                    <h6 className="price">$100</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="position-relative wishlist-card">
                                <img src="images/cross.svg" alt="cross" className="img-fluid cross position-absolute" />

                                <div className="wishlist-card-image">
                                    <img src="images/watch.jpg" className='w-100 img-fluid' alt="" />
                                </div>
                                <div className="py-3 px-3">
                                    <h5 className="title">RelojPiola</h5>
                                    <h6 className="price">$100</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="position-relative wishlist-card">
                                <img src="images/cross.svg" alt="cross" className="img-fluid cross position-absolute" />

                                <div className="wishlist-card-image">
                                    <img src="images/watch.jpg" className='w-100 img-fluid' alt="" />
                                </div>
                                <div className="py-3 px-3">
                                    <h5 className="title">RelojPiola</h5>
                                    <h6 className="price">$100</h6>
                                </div>
                            </div>
                        </div>
                    </div>
            </Container>
        </>
    )
}

export default Wishlist