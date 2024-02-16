import Banner from '../components/banner'
import ContactAndsubscription from '../components/contactandsubscription'
import Footer from '../components/footer'
import HeroSection from '../components/herosection'
import Highlights from '../components/highlights'
import Navbar from '../components/navbar'
import QuickScheduling from '../components/quickscheduling'
import Reviews from '../components/reviews'
import SimpleAbout from '../components/simpleabout'

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
        <QuickScheduling />
        <Footer />

    </>
  )
}

export default HomePage