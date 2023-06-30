import React from 'react';
import { useLocation } from 'react-router-dom';
import YourTasks from './YourTasks';
import Calendar from './Calendar';
import Countdown from './Countdown'; // Import the Countdown component
import './HomePage2.css'; // Import the CSS file for HomePage2
import { Tilt } from 'react-tilt';

function HomePage2() {
  const location = useLocation();
  const initialTodos = location.state.todos;

  return (
    <div className="home-page">

      <div className="your-tasks-container">
        <YourTasks todos={initialTodos} />
      </div>
 
      <div className="calendar-container">
        <Countdown /> {/* Replace the Calendar component with the Countdown component */}
        <Tilt   style={{ height: "200px", width: "350px" }} tiltReverse={true} tiltAngleXInitial={-30} tiltMaxAngleX={30} tiltMaxAngleY={30}>
          <Calendar />
       </Tilt>
      </div>
    </div>
  );
}

export default HomePage2;

