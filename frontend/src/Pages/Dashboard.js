import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Dashboard = () => {
    const navigate = useNavigate(); // Use useNavigate hook

    const [showLogout, setShowLogout] = useState(false);

    const handleLogout = () => {
        // Perform logout logic here
        // Redirect to home page after logout
        navigate('/');
    };

    const handleButtonClick = (page) => {
        // Redirect to the specified page
        navigate(`/${page}`);
    };

    const gotoStudentData = () => {
        navigate('/studentdata');
    }

    return (
            <div>
                <div className="header">
                    <div className="logo">
                        {/* Add your logo here */}
                        <img src="logo.png" alt="Logo" />
                        {/* Add your logo name here */}
                        <h1>Logo Name</h1>
                    </div>
                    <div className="user">
                        {/* Add user image icon here */}
                        <img src="user.png" alt="User" />
                        {/* Add user name here */}
                        <p>User Name</p>
                    </div>
                    <button onClick={handleLogout}>Logout</button>
                </div>
                {/* Add the rest of your dashboard content here */}
                <div className="buttons">
                    <button onClick={() => handleButtonClick('register')}>Register</button>
                    <button onClick={() => handleButtonClick('display')}>Display</button>
                    <button onClick={() => handleButtonClick('studentrequest')}>Student Request</button>
                </div>
            </div>
        );
};

export default Dashboard;
