import React from 'react'

function NotFound() {
  return (
    <div className='mt-14 pt-8 bg-white'>
        <div className="container-xxl bg-white p-0">

        <div className="container-xxl py-5 page-header position-relative mb-5">
            <div className="container py-5">
                <h1 className="display-2 text-white animated slideInDown mb-4">404 Error</h1>
                <nav aria-label="breadcrumb animated slideInDown">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item text-white active" aria-current="page">404 Error</li>
                    </ol>
                </nav>
            </div>
        </div>

        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container text-center">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
                        <h1 className="display-1">404</h1>
                        <h1 className="mb-4">Page Not Found</h1>
                        <p className="mb-4">We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
                        <a className="btn btn-primary rounded-pill py-3 px-5" href="">Go Back To Home</a>
                    </div>
                </div>
            </div>
        </div>

        <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
    </div>
    </div>
  )
}

export default NotFound