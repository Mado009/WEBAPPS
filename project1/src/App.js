import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
      <>
      <Routes>
        <Route path='/' element={<Navbar />} />
      </Routes>
      </>

      );
}

export default App;
