import React from 'react'
import { Link } from 'react-router-dom'
const image1 = "img/appointment.jpg"

function Appointments() {
  return (
    <div className='mt-14 pt-8 bg-white'>
        <div className="container-xxl bg-white p-0">

        <div className="container-xxl py-5 page-header position-relative mb-5">
            <div className="container py-5">
                <h1 className="display-2 text-white animated slideInDown mb-4">Appointment</h1>
                <nav aria-label="breadcrumb animated slideInDown">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item text-white active" aria-current="page">Appointment</li>
                    </ol>
                </nav>
            </div>
        </div>

        <div className="container-xxl py-5">
            <div className="container">
                <div className="bg-light rounded">
                    <div className="row g-0">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="h-100 d-flex flex-column justify-content-center p-5">
                                <h1 className="mb-4 sm:text-3xl text-xl">Make Appointment</h1>
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
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s" style={{"min-height": "400px;"}}>
                            <div className="position-relative h-100">
                                <img className="position-absolute w-100 h-100 rounded" src="img/appointment.jpg" style={{"object-fit": "cover"}}/>
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

export default Appointments