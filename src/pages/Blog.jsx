import React from 'react'
import BreadCrum from '../components/BreadCrum'
import { Helmet } from "react-helmet";
import Meta from '../components/Meta';
import BlogCard from '../components/BlogCard';
import Container from '../components/Container';
const Blog = () => {
    return (
        <>
            <Meta title={"Blogs"} />
            <BreadCrum title='Blogs' />
            <Container class1="blog-wrapper home-wrapper-2 py-5">
              
                    <div className="row">
                        <div className="col-3">
                            <div className="filter-card mb-3" >
                                <h3 className="filter-title">
                                    Encuentra por categoria
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
                        </div>
                        <div className="col-9">
                            <div className="row " >
                                <div className="col-6 mb-3">
                                    <BlogCard />
                                </div>
                                <div className="col-6 mb-3">
                                    <BlogCard />
                                </div>
                                <div className="col-6 mb-3">
                                    <BlogCard />
                                </div>
                                <div className="col-6 mb-3">
                                    <BlogCard />
                                </div>
                            </div>
                        </div>
                    </div>
                
            </Container>
        </>
    )
}

export default Blog