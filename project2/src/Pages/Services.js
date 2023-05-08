import React from 'react'
import Herosec from '../Components/Herosec'
import Footer from '../Components/Footer'
import Latest from '../Components/Latest'

function Services() {
  return (
    <>
    <Herosec
      cName="hero-about"
      heroimg="/images/img-2.jpg"
      title="Services"
      btnclass="hide"
    />
    <Latest/>
    <Footer/>
    </>
  )
}

export default Services