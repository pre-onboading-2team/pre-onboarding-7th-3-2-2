import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import User from './pages/Main/User';
import UserList from './pages/Main/UserList';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/account" element={<Main />} />
        <Route path="/account/user/:userid" element={<User />} />
        <Route path="/userlist" element={<UserList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
