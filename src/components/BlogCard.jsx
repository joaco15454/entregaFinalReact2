import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
        <div className="blog-card">
            <div className="card-image">
                <img src="images/blog-1.jpg" className='w-100 img-fluid' alt="blog" />
            </div>
            <div className="blog-content">
                <p className='date'>1 de diciembre,2022</p>
                <h5 className="title">Una hermosa mañana no se que</h5>
                <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus vitae laboriosam blanditiis. Eos quia, officia tenetur accusamus delectus at unde consequuntur ipsa aliquid labore neque. Repudiandae nam quas sint possimus!</p>
                <Link to="/blogs/:id"className='button'>Leer mas</Link>
            </div>
        </div>
  )
}

export default BlogCard