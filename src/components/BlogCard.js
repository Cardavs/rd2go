import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
    
        <div className="blog-card">
            <div className="card-image">
                <img src="images/blog-1.jpg" className='img-fluid w-100' alt="blog" />
            </div>
            <div className="blog-content">
                    <p className="date"> 15 de Mayo 2023</p>
                    <h5 className="tittle">Hermosa Mañana para Comprar</h5>
                        <p className="desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae molestiae vero officiis.?</p>
                        <Link to="/" className='button'>Read More</Link>
            </div>
        </div>
  )
}

export default BlogCard