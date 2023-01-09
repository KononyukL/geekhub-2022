import React from 'react';
import { Link, useAsyncValue } from 'react-router-dom';
import './style.css';

const Todos = () => {
  const todos = useAsyncValue();

  return (
    <>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Link className="todo-link" to={`${todo.id}`}>
            {todo.title}
          </Link>
        </li>
      ))}
    </>
  );
};

export default Todos;
