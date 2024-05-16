import React, { useState } from 'react';
import axios from 'axios';
import universitylogo from '../assets/universitylogo.png';
import { useNavigate } from 'react-router-dom';

const Complain = () => {
    const [registrationNumber, setRegistrationNumber] = useState('');
    const [complain, setComplain] = useState('');
    const [reason, setReason] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            await axios.post('http://localhost:8080/api/complain/submit-complaint', { registrationNumber, complain, reason });
            alert('Complaint submitted successfully');
            setRegistrationNumber('');
            setComplain('');
            setReason('');
        } catch (error) {
            console.error('Error submitting complaint:', error);
            alert('Error submitting complaint');
        }
    };

    const navigate = useNavigate(); 

    const gotoHome = () => {
        navigate('/'); 
    };

    return (
        <>
            <div className='main'>
                <div className="unilogo">
                    <img src={universitylogo} alt="University Logo" />
                </div>
                <div className='uniname'>
                    <div>University of Vavuniya</div>
                    <div className='sri'>Sri Lanka</div> 
                </div>
            </div>
            <div className='ComplainContent'>
                <h1>Complaint Form</h1>
                <form onSubmit={handleSubmit}>
                    <label className='ComplainLabel'>Registration Number:</label>
                    <input
                        type="text"
                        value={registrationNumber}
                        onChange={(e) => setRegistrationNumber(e.target.value)}
                    />
                    
                    <br />
                    <label className='ComplainLabel'>Complaint:</label>
                    <textarea
                        value={complain}
                        onChange={(e) => setComplain(e.target.value)}
                    ></textarea>
                    
                    <br />
                    <label className='ComplainLabel'>Reason:</label>
                    <input
                        type="text"
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                    />
                    
                    <br />
                    <button type="submit">Submit</button>
                    <button type="button" onClick={gotoHome}>Go Back</button>
                </form>
            </div>
        </>
    );
};

export default Complain;
