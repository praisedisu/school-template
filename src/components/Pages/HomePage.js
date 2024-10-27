import React from 'react'
import ImageCarousel from '../Carousel'
import SliderCarousel from '../SliderCarousel'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div>
        <div className="container-xxl bg-white p-0">

        <ImageCarousel />

        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{"max-width": "600px;"}}>
                    <h1 className="mb-3 sm:sm:text-4xl text-2xl  text-2xl">School Facilities</h1>
                    <p className='text-sm sm:text-lg'>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                </div>
                <div className="row g-4">
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="facility-item">
                            <div className="facility-icon bg-primary">
                                <span className="bg-primary"></span>
                                <i className="fa fa-bus-alt fa-3x text-primary"></i>
                                <span className="bg-primary"></span>
                            </div>
                            <div className="facility-text bg-primary">
                                <h3 className="text-primary mb-3 sm:sm:text-4xl text-2xl  text-2xl">School Bus</h3>
                                <p className="mb-0">Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="facility-item">
                            <div className="facility-icon bg-success">
                                <span className="bg-success"></span>
                                <i className="fa fa-futbol fa-3x text-success"></i>
                                <span className="bg-success"></span>
                            </div>
                            <div className="facility-text bg-success">
                                <h3 className="text-success mb-3 sm:sm:text-4xl text-2xl  text-2xl">Playground</h3>
                                <p className='text-sm sm:text-lg'>Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="facility-item">
                            <div className="facility-icon bg-warning">
                                <span className="bg-warning"></span>
                                <i className="fa fa-home fa-3x text-warning"></i>
                                <span className="bg-warning"></span>
                            </div>
                            <div className="facility-text bg-warning">
                                <h3 className="text-warning mb-3 sm:sm:text-4xl text-2xl  text-2xl">Healthy Canteen</h3>
                                <p className='text-sm sm:text-lg'>Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="facility-item">
                            <div className="facility-icon bg-info">
                                <span className="bg-info"></span>
                                <i className="fa fa-chalkboard-teacher fa-3x text-info"></i>
                                <span className="bg-info"></span>
                            </div>
                            <div className="facility-text bg-info">
                                <h3 className="text-info mb-3 sm:sm:text-4xl text-2xl  text-2xl">Positive Learning</h3>
                                <p className='text-sm sm:text-lg'>Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <h1 className="mb-4 sm:text-4xl text-2xl ">Learn More About Our Work And Our Cultural Activities</h1>
                        <p className='text-sm sm:text-lg'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                        <p className="text-sm sm:text-lg">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos, ipsum labore duo duo sit no sea diam. Et dolor et kasd ea. Eirmod diam at dolor est vero nonumy magna.</p>
                        <div className="row g-4 align-items-center">
                            <div className="col-sm-6">
                                <a className="btn btn-primary rounded-pill py-3 px-5" href="">Read More</a>
                            </div>
                            <div className="col-sm-6">
                                <div className="d-flex align-items-center">
                                    <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style={{"width": "45px", "height": "45px"}}/>
                                    <div className="ms-3">
                                        <h6 className="text-primary mb-1">Jhon Doe</h6>
                                        <small>CEO & Founder</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 about-img wow fadeInUp" data-wow-delay="0.5s">
                        <div className="row">
                            <div className="col-12 text-center">
                                <img className="img-fluid w-75 rounded-circle bg-light p-3" src="img/about-1.jpg" alt=""/>
                            </div>
                            <div className="col-6 text-start" style={{"margin-top": "-150px"}}>
                                <img className="img-fluid w-100 rounded-circle bg-light p-3" src="img/about-2.jpg" alt=""/>
                            </div>
                            <div className="col-6 text-end" style={{"margin-top": "-150px"}}>
                                <img className="img-fluid w-100 rounded-circle bg-light p-3" src="img/about-3.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-xxl py-5">
            <div className="container">
                <div className="bg-light rounded">
                    <div className="row g-0">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s" style={{"min-height": "400px"}}>
                            <div className="position-relative h-100">
                                <img className="position-absolute w-100 h-100 rounded" src="img/call-to-action.jpg" style={{"object-fit": "cover"}}/>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <div className="h-100 d-flex flex-column justify-content-center p-5">
                                <h1 className="mb-4 sm:text-4xl text-2xl ">Become A Teacher</h1>
                                <p className="mb-4 text-sm sm:text-lg">
                                    Try reaching out to us on our Contact page
                                </p>
                                <Link className="btn btn-primary py-3 px-5" to={'/contact-us'}>Get Started Now<i className="fa fa-arrow-right ms-2"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{"max-width": "600px"}}>
                    <h1 className="mb-3 sm:text-4xl text-2xl ">Study Feilds</h1>
                    <p className="text-sm sm:text-lg">Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="classNamees-item">
                            <div className="bg-light rounded-circle w-75 mx-auto p-3">
                                <img className="img-fluid rounded-circle" src="img/classNamees-1.jpg" alt=""/>
                            </div>
                            <div className="bg-light rounded p-4 pt-5 mt-n5">
                                <a className="d-block text-center h3 mt-3 mb-4" href="">Arts</a>
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <div className="d-flex align-items-center">
                                        <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style={{"width": "45px", "height": "45px"}}/>
                                        <div className="ms-3">
                                            <h6 className="text-primary mb-1">Jhon Doe</h6>
                                            <small>Teacher</small>
                                        </div>
                                    </div>
                                    <span className="bg-primary text-white rounded-pill py-2 px-3" href="">$99</span>
                                </div>
                                <div className="row g-1">
                                    <div className="col-4">
                                        <div className="border-top border-3 border-primary pt-2">
                                            <h6 className="text-primary mb-1">Age:</h6>
                                            <small>3-5 Years</small>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="border-top border-3 border-success pt-2">
                                            <h6 className="text-success mb-1">Time:</h6>
                                            <small>9-10 AM</small>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="border-top border-3 border-warning pt-2">
                                            <h6 className="text-warning mb-1">Capacity:</h6>
                                            <small>30 Kids</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="classNamees-item">
                            <div className="bg-light rounded-circle w-75 mx-auto p-3">
                                <img className="img-fluid rounded-circle" src="img/classNamees-2.jpg" alt=""/>
                            </div>
                            <div className="bg-light rounded p-4 pt-5 mt-n5">
                                <a className="d-block text-center h3 mt-3 mb-4" href="">Science</a>
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <div className="d-flex align-items-center">
                                        <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style={{"width": "45px", "height": "45px;"}}/>
                                        <div className="ms-3">
                                            <h6 className="text-primary mb-1">Jhon Doe</h6>
                                            <small>Teacher</small>
                                        </div>
                                    </div>
                                    <span className="bg-primary text-white rounded-pill py-2 px-3" href="">$99</span>
                                </div>
                                <div className="row g-1">
                                    <div className="col-4">
                                        <div className="border-top border-3 border-primary pt-2">
                                            <h6 className="text-primary mb-1">Age:</h6>
                                            <small>3-5 Years</small>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="border-top border-3 border-success pt-2">
                                            <h6 className="text-success mb-1">Time:</h6>
                                            <small>9-10 AM</small>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="border-top border-3 border-warning pt-2">
                                            <h6 className="text-warning mb-1">Capacity:</h6>
                                            <small>30 Kids</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="classNamees-item">
                            <div className="bg-light rounded-circle w-75 mx-auto p-3">
                                <img className="img-fluid rounded-circle" src="img/classNamees-3.jpg" alt=""/>
                            </div>
                            <div className="bg-light rounded p-4 pt-5 mt-n5">
                                <a className="d-block text-center h3 mt-3 mb-4" href="">Athletic & Dance</a>
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <div className="d-flex align-items-center">
                                        <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style={{"width": "45px", "height": "45px"}}/>
                                        <div className="ms-3">
                                            <h6 className="text-primary mb-1">Jhon Doe</h6>
                                            <small>Teacher</small>
                                        </div>
                                    </div>
                                    <span className="bg-primary text-white rounded-pill py-2 px-3" href="">$99</span>
                                </div>
                                <div className="row g-1">
                                    <div className="col-4">
                                        <div className="border-top border-3 border-primary pt-2">
                                            <h6 className="text-primary mb-1">Age:</h6>
                                            <small>3-5 Years</small>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="border-top border-3 border-success pt-2">
                                            <h6 className="text-success mb-1">Time:</h6>
                                            <small>9-10 AM</small>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="border-top border-3 border-warning pt-2">
                                            <h6 className="text-warning mb-1">Capacity:</h6>
                                            <small>30 Kids</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="classNamees-item">
                            <div className="bg-light rounded-circle w-75 mx-auto p-3">
                                <img className="img-fluid rounded-circle" src="img/classNamees-4.jpg" alt=""/>
                            </div>
                            <div className="bg-light rounded p-4 pt-5 mt-n5">
                                <a className="d-block text-center h3 mt-3 mb-4" href="">Language & Speaking</a>
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <div className="d-flex align-items-center">
                                        <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style={{"width": "45px", "height": "45px"}}/>
                                        <div className="ms-3">
                                            <h6 className="text-primary mb-1">Jhon Doe</h6>
                                            <small>Teacher</small>
                                        </div>
                                    </div>
                                    <span className="bg-primary text-white rounded-pill py-2 px-3" href="">$99</span>
                                </div>
                                <div className="row g-1">
                                    <div className="col-4">
                                        <div className="border-top border-3 border-primary pt-2">
                                            <h6 className="text-primary mb-1">Age:</h6>
                                            <small>3-5 Years</small>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="border-top border-3 border-success pt-2">
                                            <h6 className="text-success mb-1">Time:</h6>
                                            <small>9-10 AM</small>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="border-top border-3 border-warning pt-2">
                                            <h6 className="text-warning mb-1">Capacity:</h6>
                                            <small>30 Kids</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="classNamees-item">
                            <div className="bg-light rounded-circle w-75 mx-auto p-3">
                                <img className="img-fluid rounded-circle" src="img/classNamees-5.jpg" alt=""/>
                            </div>
                            <div className="bg-light rounded p-4 pt-5 mt-n5">
                                <a className="d-block text-center h3 mt-3 mb-4" href="">Religion & History</a>
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <div className="d-flex align-items-center">
                                        <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style={{"width": "45px", "height": "45px"}}/>
                                        <div className="ms-3">
                                            <h6 className="text-primary mb-1">Jhon Doe</h6>
                                            <small>Teacher</small>
                                        </div>
                                    </div>
                                    <span className="bg-primary text-white rounded-pill py-2 px-3" href="">$99</span>
                                </div>
                                <div className="row g-1">
                                    <div className="col-4">
                                        <div className="border-top border-3 border-primary pt-2">
                                            <h6 className="text-primary mb-1">Age:</h6>
                                            <small>3-5 Years</small>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="border-top border-3 border-success pt-2">
                                            <h6 className="text-success mb-1">Time:</h6>
                                            <small>9-10 AM</small>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="border-top border-3 border-warning pt-2">
                                            <h6 className="text-warning mb-1">Capacity:</h6>
                                            <small>30 Kids</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="classNamees-item">
                            <div className="bg-light rounded-circle w-75 mx-auto p-3">
                                <img className="img-fluid rounded-circle" src="img/classNamees-6.jpg" alt=""/>
                            </div>
                            <div className="bg-light rounded p-4 pt-5 mt-n5">
                                <a className="d-block text-center h3 mt-3 mb-4" href="">General Knowledge</a>
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <div className="d-flex align-items-center">
                                        <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style={{"width": "45px", "height": "45px"}}/>
                                        <div className="ms-3">
                                            <h6 className="text-primary mb-1">Jhon Doe</h6>
                                            <small>Teacher</small>
                                        </div>
                                    </div>
                                    <span className="bg-primary text-white rounded-pill py-2 px-3" href="">$99</span>
                                </div>
                                <div className="row g-1">
                                    <div className="col-4">
                                        <div className="border-top border-3 border-primary pt-2">
                                            <h6 className="text-primary mb-1">Age:</h6>
                                            <small>3-5 Years</small>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="border-top border-3 border-success pt-2">
                                            <h6 className="text-success mb-1">Time:</h6>
                                            <small>9-10 AM</small>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="border-top border-3 border-warning pt-2">
                                            <h6 className="text-warning mb-1">Capacity:</h6>
                                            <small>30 Kids</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-xxl py-5">
            <div className="container">
                <div className="bg-light rounded">
                    <div className="row g-0">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="h-100 d-flex flex-column justify-content-center p-5">
                                <h1 className="mb-4 sm:text-4xl text-2xl ">Make Appointment</h1>
                                <form>
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control border-0" id="gname" placeholder="Gurdian Name"/>
                                                <label for="gname">Gurdian Name</label>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input type="email" className="form-control border-0" id="gmail" placeholder="Gurdian Email"/>
                                                <label for="gmail">Gurdian Email</label>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control border-0" id="cname" placeholder="Child Name"/>
                                                <label for="cname">Child Name</label>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control border-0" id="cage" placeholder="Child Age"/>
                                                <label for="cage">Child Age</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control border-0" placeholder="Leave a message here" id="message" style={{"height": "100px"}}></textarea>
                                                <label for="message">Message</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s" style={{"min-height": "400px"}}>
                            <div className="position-relative h-100">
                                <img className="position-absolute w-100 h-100 rounded" src="img/appointment.jpg" style={{"object-fit": "cover"}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{"max-width": "600px"}}>
                    <h1 className="mb-3 text-3xl">Our Directors</h1>
                    <p className="text-sm sm:text-lg">Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit
                        eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="team-item position-relative">
                            <img className="img-fluid rounded-circle w-75" src="img/team-1.jpg" alt=""/>
                            <div className="team-text">
                                <h3>Full Name</h3>
                                <p>Designation</p>
                                <div className="d-flex align-items-center">
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-primary  mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-primary  mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="team-item position-relative">
                            <img className="img-fluid rounded-circle w-75" src="img/team-2.jpg" alt=""/>
                            <div className="team-text">
                                <h3>Full Name</h3>
                                <p>Designation</p>
                                <div className="d-flex align-items-center">
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-primary  mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-primary  mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="team-item position-relative">
                            <img className="img-fluid rounded-circle w-75" src="img/team-3.jpg" alt=""/>
                            <div className="team-text">
                                <h3>Full Name</h3>
                                <p>Designation</p>
                                <div className="d-flex align-items-center">
                                    <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-primary  mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-primary  mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="container-xxl py-5">
            <SliderCarousel />
        </div>
        
        
        
        <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top mb-8"><i className="bi bi-arrow-up"></i></a>
    </div>
    </div>
  )
}

export default HomePage