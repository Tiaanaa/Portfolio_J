import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import HighSchool from './pages/HighSchool';
import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/HighSchool' element={<HighSchool />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
