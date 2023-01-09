import React, { useCallback, useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './style.css';
import { usersApi } from '../../api/users';
import Loader from '../Loader';

const Layout = () => {
  // we can't use 'react-router-dom loader' because query params rerender this component
  const [users, setUsers] = useState([]);
  const [loader, setLoader] = useState(false);

  const getUsers = useCallback(async () => {
    try {
      setLoader(true);
      const userList = await usersApi.users();
      setUsers(userList);
    } catch (e) {
      console.error(e);
    } finally {
      setLoader(false);
    }
  }, []);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="layout">
      <nav className="nav">
        <h2 className="logo">{'TODO LIST'}</h2>
        <NavLink className="link" to="/">
          Home
        </NavLink>
        {loader ? (
          <Loader />
        ) : (
          users.map((user) => (
            <NavLink key={user.id} className="link" to={`/user/${user.id}`}>
              {user.name}
            </NavLink>
          ))
        )}
      </nav>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
