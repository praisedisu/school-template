import React from 'react'
import { Link } from 'react-router-dom'

function ContactUs() {
  return (
    <div className='mt-14 pt-8 bg-white'>
        <div className="container-xxl bg-white p-0">

        <div className="container-xxl py-5 page-header position-relative mb-5">
            <div className="container py-5">
                <h1 className="display-2 text-white animated slideInDown mb-4">Contact Us</h1>
                <nav aria-label="breadcrumb animated slideInDown">
                    <ol className="breadcrumb">
                        <Link to={'/'} className="breadcrumb-item"><a>Home</a></Link>
                        <Link to={'/contact-us'} className="breadcrumb-item text-white active" aria-current="page">Contact Us</Link>
                    </ol>
                </nav>
            </div>
        </div>

        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{"max-width": "600px;"}}>
                    <h1 className="mb-3 sm:text-3xl text-xl">Get In Touch</h1>
                    <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit
                        eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                </div>
                <div className="row g-4 mb-5">
                    <div className="col-md-6 col-lg-4 text-center wow fadeInUp" data-wow-delay="0.1s">
                        <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{"width": "75px", "height": "75px;"}}>
                            <i className="fa fa-map-marker-alt fa-2x text-primary"></i>
                        </div>
                        <h6>Alama Rd, link road, kabong, Jos 930004, Plateau</h6>
                    </div>
                    <div className="col-md-6 col-lg-4 text-center wow fadeInUp" data-wow-delay="0.3s">
                        <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{"width": "75px", "height": "75px;"}}>
                            <i className="fa fa-envelope-open fa-2x text-primary"></i>
                        </div>
                        <h6>treasurefeild@gmail.com</h6>
                    </div>
                    <div className="col-md-6 col-lg-4 text-center wow fadeInUp" data-wow-delay="0.5s">
                        <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{"width": "75px", "height": "75px;"}}>
                            <i className="fa fa-phone-alt fa-2x text-primary"></i>
                        </div>
                        <h6>+234 000 345 6789</h6>
                    </div>
                </div>
                <div className="bg-light rounded">
                    <div className="row g-0">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="h-100 d-flex flex-column justify-content-center p-5">
                                <p className="mb-4">You can reach out to us by leaving a message here and we would respond as fast as possible</p>
                                <form>
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control border-0" id="name" placeholder="Your Name"/>
                                                <label for="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input type="email" className="form-control border-0" id="email" placeholder="Your Email"/>
                                                <label for="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control border-0" id="subject" placeholder="Subject"/>
                                                <label for="subject">Subject</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control border-0" placeholder="Leave a message here" id="message" style={{"height": "100px"}}></textarea>
                                                <label for="message">Message</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s" style={{"min-height": "400px"}}>
                            <div className="position-relative h-100">
                                <iframe className="position-relative rounded w-100 h-100"
                                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Treasure%20Field%20College,%20Jos+(Treasure%20Feild%20Academy)&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                frameborder="0" style={{"min-height": "400px", "border":"0"}} allowfullscreen="" aria-hidden="false"
                                tabindex="0"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
    </div>
    </div>
  )
}

export default ContactUs