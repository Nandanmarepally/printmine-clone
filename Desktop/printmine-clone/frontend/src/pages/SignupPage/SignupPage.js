import React, { useState } from 'react';
import './SignupPage.css';

const SignupPage = () => {
  const [userDetails, setUserDetails] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleSignup = () => {
    // Handle signup logic
    console.log('Signing up with details:', userDetails);
  };

  return (
    <div className="signup-page">
      <h1>Sign Up</h1>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={userDetails.name}
        onChange={handleChange}
        className="input-field"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={userDetails.email}
        onChange={handleChange}
        className="input-field"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={userDetails.password}
        onChange={handleChange}
        className="input-field"
      />
      <button onClick={handleSignup} className="signup-button">Sign Up</button>
    </div>
  );
};

export default SignupPage;
