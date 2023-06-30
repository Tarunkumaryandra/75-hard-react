import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AppLoginCard.css';
import { Tilt } from 'react-tilt';

function AppLoginCard() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform authentication logic here
    // For simplicity, let's assume authentication is successful
    console.log('Logged in');
    navigate('/home'); // Redirect to the home page
  };

  return (
    <Tilt tiltReverse={true} tiltAngleXInitial={-30} tiltMaxAngleX={30} tiltMaxAngleY={30}>
    <div className="app-login-card">
      <h1 className="card-title">Login</h1>
      <div className="underline-title"></div>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="username">Email</label>
          <br></br>
          <input
            type="text"
            id="username"
            className="form-content"
            value={username}
            onChange={handleUsernameChange}
          />
          <div className="form-border"></div>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <br></br>
          <input
            type="password"
            id="password"
            className="form-content"
            value={password}
            onChange={handlePasswordChange}
          />
          <div className="form-border"></div>
          <button className="link-buttonFP" onClick={() => navigate('/forgot-password')}>
        Forgot password?
      </button>
        </div>
        <button className="btn">LOGIN</button>
      </form>
  
      <button className="link-buttonDHA" onClick={() => navigate('/signup')}>
        Don't have an account yet?
      </button>
    </div>
    </Tilt>
  );
}

export default AppLoginCard;
