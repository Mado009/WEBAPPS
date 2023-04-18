import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Products from './Pages/Products';
import Signup from './Pages/Signup';
function App() {
  return (
      <>
      <Navbar/>
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/services' exact Component={Services}/>
        <Route path='/products' exact Component={Products}/>
        <Route path='/sign-up' exact Component={Signup}/>
      </Routes>
      </>

      );
}

export default App;
