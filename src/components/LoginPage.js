import React from 'react';
import AppLoginCard from './AppLoginCard';
import './LoginPage.css'; // Import the CSS file
import Logo from './Logo';

function LoginPage() {
  return (
    <div className="login-page">
      <div className='logo'>
        <Logo />
      </div>
      <div className="login-card">
        <AppLoginCard />
      </div>
    </div>
  );
}

export default LoginPage;
