import React, { useState } from 'react';
import './Home.css';
import universitylogo from '../assets/universitylogo.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate(); // useNavigate hook instead of history

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const gotoCertificate = () => {
    navigate('/Certificate'); // Use navigate function instead of history.push
  };
  
  const redirectToUniversityWebsite = () => {
    window.open('https://vau.ac.lk/', '_self'); // Redirect to university website in a new tab
  };

  const gotoComplain = () => {
    navigate('/Complain'); // Use navigate function instead of history.push
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      alert('Please enter a valid email address');
      return;
    }
    
    if (!password.trim() || password.length < 6) {
      alert('Please enter a password with at least 6 characters');
      return;
    }

    // If email and password are valid, you can proceed with further actions
    // For example, you can make an API request to authenticate the user
    // Once the user is authenticated, you can redirect them to another page
    navigate('/Dashboard');
  };

  return (
    <div className='main'>
      <div className="unilogo">
        <img src={universitylogo} alt="University Logo" />
      </div>
      <form onSubmit={handleSubmit} className='form-box'>
        <div>
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={handleEmailChange} 
            required 
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={handlePasswordChange} 
            required 
          />
        </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
      </form>
      <div className='container1'>
        <h1>Welcome</h1><br/>
        <h2>Proctor and Welfare</h2>
        <h3>Web Portal</h3>
      </div>
      <div className='button-container'>
        <button onClick={gotoCertificate}>Request Character Certificate</button>
        <button onClick={redirectToUniversityWebsite}>University Website</button>
        <button onClick={gotoComplain}>Complain</button>
      </div>
    </div>
  );
};

export default Home;
