import React from 'react'
import Banner from '../../Components/Home/Banner/Banner'
import About from '../../Components/Home/About/About'
import Service from '../../Components/Home/Service/Service'
import Contact from '../../Components/Home/Contact/Contact'
import Products from '../../Components/Home/Products/Products'
import TeamSection from '../../Components/Home/Team/TeamSection'
import Feature from '../../Components/Home/Feature/Feature'
import Testimonial from '../../Components/Home/Testimonial/Testimonial'

function Home() {
  return (
    <>
    <Banner />
    <About />
    <Service />
    <Contact />
    <Products />
    <TeamSection />
    <Feature />
    <Testimonial />
    </>
  )
}

export default Home