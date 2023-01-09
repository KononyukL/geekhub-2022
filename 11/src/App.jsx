import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import UserTodos, { userTodosLoader } from './pages/UserTodos';
import Todo, { todoLoader } from './pages/Todo';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="user/:id" element={<UserTodos />} loader={userTodosLoader} />
      <Route path="user/:id/:todoId" element={<Todo />} loader={todoLoader} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
