import React from 'react';
//import { Container, Grid, Typography, Box } from '@mui/material';
///import NavBar from './components/NavBar';
//import HotelCard from './components/HotelCard';
//import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Accommodation from './components/Accommodation';


import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Accommodation" element={<Accommodation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


