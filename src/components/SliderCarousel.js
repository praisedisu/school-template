import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import {ArrowRightShort} from 'react-bootstrap-icons'

function SliderCarousel() {
  return (
    <div>
        <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{"max-width": "600px"}}>
                    <h1 className="mb-3 sm:text-3xl text-xl">Our Clients Say!</h1>
                    <p className="text-sm sm:text-lg">Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                </div>
                <div className="testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                    <Carousel showArrows={true} infinite={true} autoPlay={false} arrowNext={<ArrowRightShort/>}>
                        <div className="testimonial-item bg-light rounded p-5">
                            <p className="text-sm sm:text-lg">Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                            <div className="d-flex align-items-center bg-white me-n5" style={{"border-radius": "50px 0 0 50px"}}>
                                <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-1.jpg" style={{"width": "90px", "height": "90px"}}/>
                                <div className="ps-3">
                                    <h3 className="mb-1">Client Name</h3>
                                    <span>Profession</span>
                                </div>
                                <i className="fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex"></i>
                            </div>
                        </div>
                        <div className="testimonial-item bg-light rounded p-5">
                        <p className="fs-5">Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                        <div className="d-flex align-items-center bg-white me-n5" style={{"border-radius": "50px 0 0 50px"}}>
                            <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-2.jpg" style={{"width": "90px", "height": "90px"}}/>
                            <div className="ps-3">
                                <h3 className="mb-1">Client Name</h3>
                                <span>Profession</span>
                            </div>
                            <i className="fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex"></i>
                        </div>
                    </div>
                    </Carousel>
                    
                </div>
            </div>
    </div>
  )
}

export default SliderCarousel