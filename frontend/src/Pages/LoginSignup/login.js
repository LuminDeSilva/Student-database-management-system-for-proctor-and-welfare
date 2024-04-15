import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
        if (email === 'example@example.com' && password === 'password') {
            console.log('Login successful');
            // Redirect to the home page or perform any other actions
        } else {
            console.log('Invalid email or password');
            // Display an error message or perform any other actions
        }
    };

    return (
        <div className='login'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={handleEmailChange} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </div>
                <div>
                    <label>
                        <input type="checkbox" />
                        Remember me
                    </label>
                    <a href="/forgot-password">Forgot password?</a>
                </div>
                <button type="submit">Login</button>
                <div>
                    <p>Don't have an account? <a href="/signup">Sign up</a></p>
                </div>
            </form>
        </div>
    
    );
};

export default Login;