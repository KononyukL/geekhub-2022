import React, { Suspense } from 'react';
import { usersApi } from '../../api/users';
import { Await, defer, useLoaderData } from 'react-router-dom';
import Loader from '../../components/Loader';
import Todos from './Todos';

const UserTodos = () => {
  const { todos } = useLoaderData();
  return (
    <div>
      <h1>User Todos</h1>
      <Suspense fallback={<Loader />}>
        <Await resolve={todos}>
          <Todos />
        </Await>
      </Suspense>
    </div>
  );
};

export const userTodosLoader = async ({ params }) => {
  const { id } = params;
  return defer({ todos: usersApi.userTodos(id) });
};

export default UserTodos;
