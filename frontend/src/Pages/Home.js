import React, { useState } from 'react';
import './Home.css';
import universitylogo from '../assets/universitylogo.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const navigate = useNavigate(); 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const gotoCertificate = () => {
    navigate('/Certificate'); 
  };
  
  const redirectToUniversityWebsite = () => {
    window.open('https://vau.ac.lk/', '_self'); 
  };

  const gotoComplain = () => {
    navigate('/Complain'); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:8080/api/admin/login', { email, password });
      const { adminEmail } = response.data;
  
      if (!adminEmail) {
          navigate('/Dashboard');
      } else {
          alert('Invalid credentials');
      }
  } catch (error) {
      console.error('Error logging in:', error);
      alert('Invalid credentials');
  }
  
  };
  

  return (
      <>
      <div className='main'>
          <div className="unilogo">
            <img src={universitylogo} alt="University Logo" />
          </div>
          <div className='uniname'>
              <div >University of Vavuniya </div>
              <div className='sri'>Sri Lanka</div> 
                
          </div>
          <form onSubmit={handleSubmit} className='form-box'>
            <div>
              <label htmlFor="email">Email:</label>
              <label htmlFor="password">Password:</label>
              <br></br>
              <input 
                type="email" 
                id="email" 
                value={email} 
                onChange={handleEmailChange} 
                required 
              />
              
              <input 
                type="password" 
                id="password" 
                value={password} 
                onChange={handlePasswordChange} 
                required 
              />
            </div>
            <div>
              <button type="submit">Sign In</button>
            </div>
          </form>
          
        </div>
        <div className='container'>
            <div className='container1'>
                <h1>Welcome</h1>
                <h2>Proctor and Welfare</h2>
                <h3>Web Portal</h3>
            </div>
            <div className='button-container'>
                <button onClick={gotoCertificate}>Request Character Certificate</button>
                <button onClick={redirectToUniversityWebsite}>University Website</button>
                <button onClick={gotoComplain}>Complain</button>
            </div>
        </div>
      </>
  );
};

export default Home;
