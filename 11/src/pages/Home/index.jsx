import React, { useCallback, useEffect, useState } from 'react';
import { todosApi } from '../../api/todos';

import Loader from '../../components/Loader';
import { useSearchParams } from 'react-router-dom';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './style.css';

const Home = () => {
  // we can't use 'react-router-dom loader' because query params rerender this component
  const [todos, setTodos] = useState([]);
  const [loader, setLoader] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const todosQuery = searchParams.get('todos') || '';
  const todosCompletedQuery = searchParams.get('todosCompleted') || '';

  const getTodos = useCallback(async () => {
    try {
      setLoader(true);
      const todosList = await todosApi.todos();
      setTodos(todosList);
    } catch (e) {
      console.error(e);
    } finally {
      setLoader(false);
    }
  }, []);

  useEffect(() => {
    getTodos();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const search = form.search.value;
    const completed = form.complete.value;

    const params = {};

    if (search.length) {
      params.todos = search;
    }
    if (completed !== 'all') {
      params.todosCompleted = completed;
    }

    setSearchParams(params);
  };

  const filterTodos = (todo) => {
    return (
      todo.title.includes(todosQuery) &&
      (!todosCompletedQuery || (todosCompletedQuery === 'completed') === todo.completed)
    );
  };

  return (
    <div>
      <h1>Home</h1>
      <form onSubmit={onSubmit} className="search">
        <Input label="Search by text" name="search" />
        <Select
          label="Search by complete"
          name="complete"
          options={[
            { value: 'all', label: 'All' },
            { value: 'completed', label: 'Completed' },
            { value: 'uncompleted', label: 'Uncompleted' }
          ]}
        />
        <button className="search-button">Filter</button>
      </form>
      <ul>
        {loader ? (
          <Loader />
        ) : (
          todos.filter(filterTodos).map((todo) => <li key={todo.id}>{todo.title}</li>)
        )}
      </ul>
    </div>
  );
};

export default Home;
