import React from 'react'
import Footer from '../components/Footer'
import LandingPage from '../components/LandingPage'
import Mission from '../components/Mission'
import Testimonials from '../components/Testimonials'

const Homepage = () => {
  return (
    <div>
        <LandingPage/>
        <Mission/>
        <Testimonials/>
        <Footer 
        className="overflow-x-hidden"/>
    </div>
  )
}

export default Homepage