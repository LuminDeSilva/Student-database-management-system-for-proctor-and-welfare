import logo from './logo.svg';
import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Certificate from './Pages/Certificate';
import Complain from './Pages/Complain';
import Dashboard from './Pages/Dashboard';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Certificate" element={<Certificate />} />
          <Route path="/Complain" element={<Complain />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
