import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Services from './Pages/Services';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' exact Component={Home} />
        <Route path='/services' exact Component={Services} />
        <Route path='/about' exact Component={About} />
        <Route path='/contact' exact Component={Contact} />
      </Routes>
    </>
  );
}

export default App;
