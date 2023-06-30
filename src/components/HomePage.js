import React from 'react';
import './HomePage.css';
import TodoList from '../components/TodoList';


function HomePage() {




  const todos = []; // Define the todos array here or fetch it from an API or local storage



  return (
    <div className='Home'>
 
      <div className="todo-app">
        <TodoList todos={todos} />
      </div>

    </div>
  );
}

export default HomePage;
