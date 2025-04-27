import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    // Handle login logic
    console.log('Logging in with:', credentials);
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={credentials.email}
        onChange={handleChange}
        className="input-field"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={credentials.password}
        onChange={handleChange}
        className="input-field"
      />
      <button onClick={handleLogin} className="login-button">Login</button>
    </div>
  );
};

export default LoginPage;
