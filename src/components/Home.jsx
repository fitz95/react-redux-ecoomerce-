import React from 'react'
import Product from './Product'

const Home = () => {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={process.env.PUBLIC_URL + "/assets/images/home/img1.jpg"} className="d-block w-100" alt="IPHONE" height='500px'/>
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
          </div>
          <div className="carousel-item">
            <img src= {process.env.PUBLIC_URL +"/assets/images/home/img2.jpg"} className="d-block w-100" alt="IPHONE" height='500px'/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
          </div>
          <div className="carousel-item">
            <img src={process.env.PUBLIC_URL + "/assets/images/home/img6.jpg"} className="d-block w-100" alt="IPHONE"height='500px'/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
                </div>
            </div>
          <div className="carousel-item">
            <img src={process.env.PUBLIC_URL +"/assets/images/home/img4.jpg"} className="d-block w-100" alt="IPHONE" height='500px'/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Fourth slide label</h5>
                <p>Some representative placeholder content for the forth slide.</p>
              </div>
          </div>

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Product/>
    </>
  )
}

export default Home