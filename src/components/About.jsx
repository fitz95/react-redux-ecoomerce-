import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className='col-md-6'>
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className='lead mb-4'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis laudantium dolorem, necessitatibus, consectetur deserunt est accusamus maxime similique quisquam doloremque nostrum. Excepturi dolorem omnis at sequi quibusdam dignissimos reiciendis ea.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quisquam non, nobis molestias officiis dolorem corrupti natus laudantium culpa vel aliquid illo eum error soluta. Debitis a recusandae incidunt voluptatibus.
            </p>
            <NavLink to='/contact' className='btn btn-outline-primary px-3'> Contact us </NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img  src={process.env.PUBLIC_URL +'/assets/images/about.png'} alt='About us' height='400px' width='400px' />
          </div>
        </div>
      </div>
    </div> 
  )
} 

export default About