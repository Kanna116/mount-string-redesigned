import React from 'react'
import Navbar from '../components/navbar'
import HeroSection from '../components/herosection'
import SimpleAbout from '../components/simpleabout'

const HomePage = () => {
  return (
    <>
        <Navbar />
        <HeroSection />
        <SimpleAbout />
    </>
  )
}

export default HomePage