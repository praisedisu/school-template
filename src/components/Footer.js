import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
        <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <h3 className="text-white mb-4 text-3xl">Get In Touch</h3>
                        <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Alama Rd, link road, kabong, Jos 930004, Plateau</p>
                        <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+234 000 345 67890</p>
                        <p className="mb-2"><i className="fa fa-envelope me-3"></i>treasurefeild@gmail.com</p>
                        <div className="d-flex pt-2">
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h3 className="text-white mb-4 text-3xl">Quick Links</h3>
                        <Link className="btn btn-link text-white-50" to="/about">About Us</Link>
                        <Link className="btn btn-link text-white-50" to="/contact-us">Contact Us</Link>
                        <Link className="btn btn-link text-white-50" to="/services">Our Services</Link>
                        <Link className="btn btn-link text-white-50" to="/privacy-policy">Privacy Policy</Link>
                        <Link className="btn btn-link text-white-50" to="/terms-and-conditions">Terms & Condition</Link>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h3 className="text-white mb-4 text-3xl">Photo Gallery</h3>
                        <div className="row g-2 pt-2">
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src="img/classNamees-1.jpg" alt=""/>
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src="img/classNamees-2.jpg" alt=""/>
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src="img/classNamees-3.jpg" alt=""/>
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src="img/classNamees-4.jpg" alt=""/>
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src="img/classNamees-5.jpg" alt=""/>
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src="img/classNamees-6.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h3 className="text-white mb-4 text-3xl">Newsletter</h3>
                        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <div className="position-relative mx-auto" style={{"max-width": "400px"}}>
                            <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                            <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a className="border-bottom" href="#">Treasure Feild Academy</a>, All Right Reserved. 
							
							
							Designed By <a className="border-bottom" href="https://htmlcodex.com">Ipade Enterprises</a>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="footer-menu">
                                <a href="">Home</a>
                                <a href="">Cookies</a>
                                <a href="">Help</a>
                                <a href="">FQAs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer