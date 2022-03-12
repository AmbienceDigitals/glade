import React from 'react'
import LandingPage from '../components/LandingPage'
import Mission from '../components/Mission'
import Testimonials from '../components/Testimonials'

const Homepage = () => {
  return (
    <div className="w-screen">
        <LandingPage/>
        <Mission/>
        <Testimonials/>
    </div>
  )
}

export default Homepage