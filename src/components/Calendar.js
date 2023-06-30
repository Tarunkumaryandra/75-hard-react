import React, { useState } from 'react';
import './Calendar.css';


const Calendar = () => {
  const [currYear, setCurrYear] = useState(new Date().getFullYear());
  const [currMonth, setCurrMonth] = useState(new Date().getMonth());

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const renderCalendar = () => {
    const date = new Date(currYear, currMonth, 1);
    const firstDayOfMonth = date.getDay();
    const lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();

    const days = [];

    // Add blank cells for the days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<li key={`inactive-${i}`} className="inactive"></li>);
    }

    // Add the days of the current month
    for (let i = 1; i <= lastDateOfMonth; i++) {
      const isToday =
        i === new Date().getDate() &&
        currMonth === new Date().getMonth() &&
        currYear === new Date().getFullYear()
          ? 'active'
          : '';
      days.push(
        <li key={i} className={isToday}>
          {i}
        </li>
      );
    }

    return days;
  };

  const handlePrevNextClick = (type) => {
    if (type === 'prev') {
      setCurrMonth((prevMonth) => prevMonth - 1);
      if (currMonth === 0) {
        setCurrYear((prevYear) => prevYear - 1);
      }
    } else if (type === 'next') {
      setCurrMonth((prevMonth) => prevMonth + 1);
      if (currMonth === 11) {
        setCurrYear((prevYear) => prevYear + 1);
      }
    }
  };

  return (
    
  

    
    <div className="wrapper">     
      <header>
        <p className="current-date">{`${months[currMonth]} ${currYear}`}</p>
        <div className="icons">
          <span id="prev" onClick={() => handlePrevNextClick('prev')}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-caret-left-fill"
              viewBox="0 0 16 16"
            >
              <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
            </svg>
          </span>

          <span id="next" onClick={() => handlePrevNextClick('next')}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-caret-right-fill"
              viewBox="0 0 16 16"
            >
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
            </svg>
          </span>
        </div>
      </header>

      <div className="calendar">
        <ul className="weeks">
          <li>Sun</li>
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Thu</li>
          <li>Fri</li>
          <li>Sat</li>
        </ul>
        <ul className="days">{renderCalendar()}</ul>
      </div>
    </div>
   
   
  );
};

export default Calendar;
