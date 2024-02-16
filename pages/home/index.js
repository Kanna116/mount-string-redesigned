import React from 'react'
import Navbar from '../components/navbar'
import HeroSection from '../components/herosection'
import SimpleAbout from '../components/simpleabout'
import Highlights from '../components/highlights'
import Banner from '../components/banner'
import Reviews from '../components/reviews'
import LiveMap from '../components/livemap'
import ContactAndsubscription from '../components/contactandsubscription'
import QuickScheduling from '../components/quickscheduling'
import Footer from '../components/footer'

const HomePage = () => {
  return (
    <>
        <Navbar />
        <HeroSection />
        <SimpleAbout />
        <Highlights />
        <Banner />
        <Reviews />
        <ContactAndsubscription />
        <LiveMap />
        <QuickScheduling />
        <Footer />

    </>
  )
}

export default HomePage