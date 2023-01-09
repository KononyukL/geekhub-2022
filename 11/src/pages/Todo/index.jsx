import React, { Suspense } from 'react';
import { todosApi } from '../../api/todos';
import { Await, defer, useLoaderData } from 'react-router-dom';
import Loader from '../../components/Loader';

const Todo = () => {
  const { todo } = useLoaderData();

  return (
    <div>
      <h1>Todo</h1>
      <Suspense fallback={<Loader />}>
        <Await resolve={todo}>
          {(resTodo) => {
            const todo = resTodo[0];
            return (
              <div>
                <p>
                  <b>ID:</b> {todo.id}
                </p>
                <p>
                  <b>Title:</b> {todo.title}
                </p>
                <p>
                  <b>Completed:</b> {todo.completed ? 'Yes' : 'No'}
                </p>
              </div>
            );
          }}
        </Await>
      </Suspense>
    </div>
  );
};

export const todoLoader = async ({ params }) => {
  const { id, todoId } = params;

  return defer({ todo: todosApi.todo({ id, todoId }) });
};
export default Todo;
