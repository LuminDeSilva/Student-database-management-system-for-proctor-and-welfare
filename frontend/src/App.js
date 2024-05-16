import logo from './logo.svg';
import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Certificate from './Pages/Certificate';
import Complain from './Pages/Complain';
import Dashboard from './Pages/Dashboard';
import StudentData from './Pages/StudentData';
import DetailStudent from './Pages/DetailStudent';
import UpdateStudentData from './Pages/Update';
import StudentRequest from './Pages/StudentRequest';
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
          <Route path="/StudentData" element={<StudentData />} />
          <Route path="/DetailStudent" element={<DetailStudent />} />
          <Route path="/UpdateStudentData" element={<UpdateStudentData />} />
          <Route path="/StudentRequest" element={<StudentRequest />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
