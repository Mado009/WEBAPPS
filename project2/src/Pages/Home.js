import React from 'react';
import '../App.css';
import Herosec from '../Components/Herosec';
import Navbar from '../Components/Navbar';
import Property from '../Components/Property';

function Home() {
  return (
    <>
      <Navbar/>
      <Herosec
      cName="hero"
      heroimg="/images/img-1.jpg"
      title="Here you will find your home"
      text="Choose your house"
      btntext="Prona"
      url="/"
      btnclass="show"
      />
      <Property/>
    </>
  )
}

export default Home