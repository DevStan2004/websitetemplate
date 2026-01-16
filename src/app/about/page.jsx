import React from 'react'
import AboutHero from '../components/AboutHero'
import AboutUs from '../components/AboutUs'
import Meet from '../components/Meet'
import AboutWorkingProcess from '../components/AboutWorkingProcess'
import AboutPricing from '../components/AboutPricing'
import AboutContact from '../components/AboutContact'


const page = () => {
  return (
    <>
      <AboutHero />
      <AboutUs />
      {/* <Meet /> */}
      {/* <AboutWorkingProcess /> */}
      <AboutContact />
    </>
  )
}

export default page