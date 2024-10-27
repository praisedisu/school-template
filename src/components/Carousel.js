import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

const image1 = 'img/carousel-1.jpg';
const image2 = 'img/carousel-2.jpg';

function ImageCarousel() {
  return (
    <div className='mt-14'>
      <Carousel showArrows={true} infinite={true} autoPlay={true} showIndicators={false}>
        <div key="slide-1">
          <img src={image1}/>
          <div className="position-absolute top-0 start-0 w-100 h-full d-flex align-items-center bg-black opacity-80" style={{"background": "rgba(0, 0, 0, .2);"}}>
                <div>
                  <div className="container">
                      <div className="row justify-content-start">
                          <div className="col-10 col-lg-8 pl-16">
                              <h1 className="sm:text-6xl text-2xl text-white animated slideInDown mb-3">The Best Secondary School For Your Child</h1>
                              <p className=" text-white pb-2 sm:text-2xl text-sm">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                              <Link to={'/about'} className="btn btn-primary rounded-pill py-sm-2 px-sm-5 me-3 animated slideInLeft">Learn More</Link>
                              {/* <a href="" className="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight">Our classNamees</a> */}
                          </div>
                      </div>
                  </div>
                </div>
            </div>
        </div>
        <div key="slide-2">
          <img src={image2} />
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center bg-black opacity-80" style={{"background": "rgba(0, 0, 0, .2);"}}>
                <div className=''>
                  <div className="container">
                      <div className="row justify-content-start">
                          <div className="col-10 col-lg-8 pl-16">
                              <h1 className="sm:text-6xl text-2xl text-white animated slideInDown mb-3">Make A Brighter Future For Your Child</h1>
                              <p className="sm:text-2xl text-sm text-white pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                              <a href="" className="btn btn-primary rounded-pill py-sm-2 px-sm-5 me-3 mt-2 animated slideInLeft">Learn More</a>
                              {/* <a href="" className="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight">Our classNamees</a> */}
                          </div>
                      </div>
                  </div>
                </div>
            </div>
        </div>
      </Carousel>
    </div>
  );
}

export default ImageCarousel;