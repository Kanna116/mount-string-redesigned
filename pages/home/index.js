import React from 'react'
import Navbar from '../components/navbar'
import HeroSection from '../components/herosection'
import SimpleAbout from '../components/simpleabout'
import Highlights from '../components/highlights'
import Banner from '../components/banner'
import Reviews from '../components/reviews'
import LiveMap from '../components/livemap'

const HomePage = () => {
  return (
    <>
        <Navbar />
        <HeroSection />
        <SimpleAbout />
        <Highlights />
        <Banner />
        <Reviews />
        <LiveMap />
    </>
  )
}

export default HomePage