import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Complain = () => {
    const [registrationNumber, setRegistrationNumber] = useState('');
    const [complain, setComplain] = useState('');
    const [reason, setReason] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Registration Number:', registrationNumber);
        console.log('Complain:', complain);
        console.log('Reason:', reason);
    };
    
    const navigate = useNavigate(); // useNavigate hook instead of history

    const gotoHome = () => {
        navigate('/'); // Use navigate function instead of history.push
    }

    return (
        <div>
            <h1>Complain Form</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Registration Number:
                    <input
                        type="text"
                        value={registrationNumber}
                        onChange={(e) => setRegistrationNumber(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Complain:
                    <textarea
                        value={complain}
                        onChange={(e) => setComplain(e.target.value)}
                    ></textarea>
                </label>
                <br />
                <label>
                    Reason:
                    <input
                        type="text"
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
            <button onClick={gotoHome}>Go to Home</button>
        </div>
    );
};

export default Complain;