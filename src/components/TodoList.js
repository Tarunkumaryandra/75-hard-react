import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import TodoForm from './TodoForm';
import Todo from './Todo';
import './TodoList.css';
import './AppLoginCard.css';
import { Tilt } from 'react-tilt';


function TodoList() {
  const navigate = useNavigate();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removedArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const navigateToHomePage2 = () => {
    navigate('/homepage2', { state: { todos } });
  };

  return (
    <Tilt tiltReverse={true} tiltAngleXInitial={-30} tiltMaxAngleX={30} tiltMaxAngleY={30}>
    <div className='todo-card'>
      <h1>What's Your Plan ?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
      <div className="go-to-homepage2-button">
  <button onClick={navigateToHomePage2}>
    Let's Go <FontAwesomeIcon icon={faFire} />
  </button>
</div>
    </div>
    </Tilt>
  
  );
}

export default TodoList;
