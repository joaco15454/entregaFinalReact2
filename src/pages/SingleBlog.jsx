import React from 'react'
import BreadCrum from '../components/BreadCrum'
import { Helmet } from "react-helmet";
import Meta from '../components/Meta';
import BlogCard from '../components/BlogCard';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import Container from '../components/Container';
const SingleBlog = () => {
  return (
    <>
    <Meta title={"Dinamic Blog"} />
            <BreadCrum title='Dinamic Blog' />
            <Container class1="blog-wrapper home-wrapper-2 py-5">
                
                    <div className="row">
                        
                        <div className="col-12">
                            <div className="single-blog-card">
                                <Link to="/blogs" className='d-flex align-items-center' style={{gap:'10px'}}><BsArrowLeft className='fs-4'/>Vuelta a los blogs</Link>
                                <h3 className="title">Hermosa mañana</h3>
                                <img src="images/blog-3.webp" alt="" />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos modi aut eaque eligendi cupiditate voluptas, odit ut esse ex, voluptatibus quo sit? Et, quibusdam dolore non ipsum voluptatum aspernatur harum.</p>
                            </div>
                        </div>
                    </div>
                
            </Container>
    </>
  )
}

export default SingleBlog