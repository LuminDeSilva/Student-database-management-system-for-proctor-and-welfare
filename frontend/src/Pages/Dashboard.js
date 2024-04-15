import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Dashboard = () => {
    const history = useHistory();
    const [showLogout, setShowLogout] = useState(false);

    const handleLogout = () => {
        // Perform logout logic here
        // Redirect to home page after logout
        history.push('/');
    };

    const handleButtonClick = (page) => {
        // Redirect to the specified page
        history.push(`/${page}`);
    };

    return (
        <div>
            <div className="icon" onClick={() => setShowLogout(!showLogout)}>
                {/* Add your icon here */}
            </div>

            {showLogout && (
                <button onClick={handleLogout}>Logout</button>
            )}

            <div>
                <button onClick={() => handleButtonClick('page1')}>Page 1</button>
                <button onClick={() => handleButtonClick('page2')}>Page 2</button>
                <button onClick={() => handleButtonClick('page3')}>Page 3</button>
            </div>
        </div>
    );
};

export default Dashboard;