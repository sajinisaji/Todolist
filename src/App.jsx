import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, toggleComplete } from './features/todos/todosSlice';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo({
        id: Date.now(),
        text,
        completed: false
      }));
      setText('');
    }
  };

  const completedTodosCount = todos.filter(todo => todo.completed).length;

  return (
    <div className="App">
      <div className="todo-container">
        <h1 className='text-warning'>My Todo List</h1>
        <div className="input-container">
          <input 
            type="text" 
            
            value={text} 
            onChange={(e) => setText(e.target.value)} 
            placeholder="Add todo..." 
          />
          <button onClick={handleAddTodo}>Submit</button>
        </div>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} className={todo.completed ? 'completed' : ''}>
              <input 
                type="checkbox" 
                checked={todo.completed} 
                onChange={() => dispatch(toggleComplete(todo.id))} 
              />
              <span>{todo.text}</span>
              <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
            </li>
          ))}
        </ul>
        <div className="footer">
          Total complete items: {completedTodosCount}
        </div>
      </div>
    </div>
  );
}

export default App;