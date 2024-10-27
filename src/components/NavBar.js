import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function NavBar() {

    const [hide, setHide] = useState()
    const toggleButton = () => {
        if(window.innerWidth < 1024){
            setHide(!hide)
        }
        else{
            
        }
    }


    return (
    <div>
        <nav className="navbar navbar-expand-lg bg-white navbar-light fixed top-0 left-0 right-0 z-20 px-4 px-lg-5 py-lg-0">
            <a href="index.html" className="navbar-brand">
                <h1 className="m-0 text-primary"><i className="fa fa-book-reader me-3"></i>Treasure Feild</h1>
            </a>
            <button type="button" className="navbar-toggler" onClick={toggleButton}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse">
                <div className="navbar-nav mx-auto" hidden={hide}>
                    <Link to={"/"} className="nav-item nav-link" onClick={toggleButton}>
                        Home
                    </Link>
                    <Link to={"/about"} className="nav-item nav-link" onClick={toggleButton}>
                        About Us
                    </Link>
                    {/* <Link to={"classes"} className="nav-item nav-link" onClick={toggleButton}>
                        classes
                    </Link> */}
                    <div className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                        <div className="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0">
                            <Link to={"/facility"} className="dropdown-item" onClick={toggleButton}>School Facilities</Link>
                            {/* <Link to={"/call-to-action"} className="dropdown-item" onClick={toggleButton}>Become A Teacher</Link> */}
                            <Link to={'/book-appointment'} className="dropdown-item" onClick={toggleButton}>Make Appointment</Link>
                            <Link to={"/achievements"} className="dropdown-item" onClick={toggleButton}>Achievements</Link>
                            <Link to={"/notFound"} className="dropdown-item" onClick={toggleButton}>404 Error</Link>
                            <Link to={"/gallery"} className="dropdown-item" onClick={toggleButton}>Gallery</Link>
                        </div>
                    </div>
                    <Link to={"/contact-us"} className="nav-item nav-link" onClick={toggleButton}>Contact Us</Link>
                </div>
                <Link to={'/signin'} className="btn btn-primary rounded-pill px-3 d-none d-lg-block">Join Us<i className="fa fa-arrow-right ms-3"></i></Link>
            </div>
        </nav>
    </div>
  )
}

export default NavBar