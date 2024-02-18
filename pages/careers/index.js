
import ApplyNow from '../components/applynow'
import CareerBanner from '../components/careerbanner'
import CurrentOpenings from '../components/currentopenings'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

const CareersPage = () => {
  return (
    <>
      <Navbar />
      <CareerBanner />
      <div className='w-full h-fit lg:py-32 py-12 px-[24px] md:px-[64px] lg:px-[100px] flex lg:flex-row  gap-7 lg:gap-0 flex-col items-start justify-evenly'>
        <ApplyNow />
        <CurrentOpenings />
      </div>

      <Footer />
    </>
  )
}

export default CareersPage