import React from 'react';
import { Tilt } from 'react-tilt';
import './Logo.css'; 

export default function Logo() {
  return (
    <Tilt  tiltReverse={true} tiltAngleXInitial={-30} tiltMaxAngleX={30} tiltMaxAngleY={30}>
      <div className='logo'>
        <h1  style={{ margin: '32px 0', color: '#fff', fontSize: '75px', textShadow: '4px 4px 8px rgba(0, 0, 0, 0.8)' }}>75 HARD</h1>
        
      </div>
      <p>Commit | Endure | Conquer</p>
    </Tilt>
  );
}