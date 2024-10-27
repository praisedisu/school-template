import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/Pages/HomePage'
import NavBar from './components/NavBar'
import ImageCarousel from './components/Carousel'
import AboutUs from './components/Pages/AboutUs'
import Appointments from './components/Pages/Appointments'
import ContactUs from './components/Pages/ContactUs'
import Footer from './components/Footer'
import CallToAction from './components/Pages/CallToAction'
import Facility from './components/Pages/Facility'
import NotFound from './components/Pages/NotFound'
import Achievements from './components/Pages/Achievements'
import GalleryPage from './components/Pages/GalleryPage'
import SignIn from './components/Registration/SignIn'

function App() {
  return (
    <div>
        <NavBar/>
        <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/about' element={<AboutUs/>}></Route>
            <Route path='/book-appointment' element={<Appointments/>}></Route>
            <Route path='/contact-us' element={<ContactUs/>}></Route>
            <Route path='/call-to-action' element={<CallToAction/>}></Route>
            <Route path='/facility' element={<Facility/>}></Route>
            <Route path='/notFound' element={<NotFound/>}></Route>
            <Route path='/achievements' element={<Achievements/>}></Route>
            <Route path='/gallery' element={<GalleryPage/>}></Route>
            <Route path='/signin' element={<SignIn/>}></Route>
        </Routes>
        <Footer/>
    </div>
  )
}

export default App