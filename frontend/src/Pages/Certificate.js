import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


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

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your submit logic here
        console.log(formData);
    };
 
    const navigate = useNavigate(); // useNavigate hook instead of history

    const gotoHome = () => {
        navigate('/'); // Use navigate function instead of history.push
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Registration Number:
                    <input type="text" name="registrationNumber" value={formData.registrationNumber} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Reason:
                    <textarea name="reason" value={formData.reason} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Phone Number:
                    <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Certificate:
                    <input type="radio" name="certificateType" value="certificate" onChange={handleChange} />
                </label>
                <label>
                    Transcription:
                    <input type="radio" name="certificateType" value="transcription" onChange={handleChange} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
            <br />
            <h4>*You will get your document before 24hrs. If you have any issue please inform through
                the email to the proctor.</h4>
            <button onClick={gotoHome}>Go Back</button>
        </div>
    );
}

export default Certificate;