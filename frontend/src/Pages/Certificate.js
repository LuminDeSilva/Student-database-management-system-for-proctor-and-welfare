import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import universitylogo from '../assets/universitylogo.png';
import axios from 'axios';

function Certificate() {
    const [formData, setFormData] = useState({
        name: '',
        registrationNumber: '',
        certificateType: '',
        email: '',
        reason: '',
        phoneNumber: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/certificate/', formData);
            console.log(response.data); 
            setFormData({
                name: '',
                registrationNumber: '',
                certificateType: '',
                email: '',
                reason: '',
                phoneNumber: ''
            });
        } catch (error) {
            console.error('Error submitting certificate request:', error);
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
                <div >university of Vavuniya </div>
                <div className='sri'>Sri Lanka</div> 
                    
            </div>
          </div>
            <div className='Certificatecontent'>
                <form onSubmit={handleSubmit}>
                    <label className='certilabel'>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    
                    <br />
                    <label className='certilabel'>Registration Number:</label>
                    <input type="text" name="registrationNumber" value={formData.registrationNumber} onChange={handleChange} />
                    
                    <br />
                    <label className='certilabel'>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />

                    <br />
                    <label className='certilabel'>Reason:</label>
                    <textarea name="reason" value={formData.reason} onChange={handleChange} />
                    
                    <br />
                    <label className='certilabel'>Phone Number:</label>
                    <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                    
                    <br />
                    <label className='certilabel'>Certificate:</label>
                    <input type="radio" name="certificateType" value="certificate" onChange={handleChange} />
                    
                    <label className='certilabel'>Transcription:</label>
                    <input type="radio" name="certificateType" value="transcription" onChange={handleChange} />
                    
                    <br />
                    <button type="submit">Submit</button>
                </form>
                <br />
                <h4>*You will get your document before 24hrs. If you have any issue please inform through
                    the email to the proctor.</h4>
                <button onClick={gotoHome}>Go Back</button>
            </div>
        </>
        
    );
}

export default Certificate;
