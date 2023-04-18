import '../App.css';
import HeroSection from '../Components/HeroSection';
import React from 'react';
import Cards from '../Components/Cards';
import Footer from '../Components/Footer';

function Home() {
  return (
    <div>
        <HeroSection />
        <Cards />
        <Footer />
    </div>
  )
}

export default Home;