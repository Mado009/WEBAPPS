import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' exact />
      </Routes>
    </>
  );
}

export default App;
