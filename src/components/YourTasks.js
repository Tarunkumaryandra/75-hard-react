import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
/*import { Tilt } from 'react-tilt';*/

function YourTasks() {
  const location = useLocation();
  const initialTodos = location.state.todos;
  const [todos, setTodos] = useState(initialTodos);

  const handleTodoClick = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isComplete: !todo.isComplete,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const areAllTasksComplete = todos.every((todo) => todo.isComplete);

  return (
   /* <Tilt tiltReverse={true} tiltAngleXInitial={-30} tiltMaxAngleX={30} tiltMaxAngleY={30}>*/
    <div className="todo-app">
  <h1 style={{  color: '#fff', textShadow: '4px 4px 8px rgba(0, 0, 0, 0.8)' }}>Your Tasks</h1>
  {todos.map((todo) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={todo.id}
      onClick={() => handleTodoClick(todo.id)}
    >
      <div>{todo.text}</div>
    </div>
  ))}
  {areAllTasksComplete && <p style={{ color: 'white' }}>All tasks are complete!</p>}
   </div>
 /*  </Tilt>*/

  );
}

export default YourTasks;
