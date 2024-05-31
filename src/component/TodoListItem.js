import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo } from './todosSlice';

const TodoListItem = ({ id, text }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeTodo(id));
  };

  return (
    <li>
      {text}
      <button onClick={handleRemove}>Remove</button>
    </li>
  );
};

export default TodoListItem;
