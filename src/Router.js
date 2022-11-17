import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import User from './pages/Main/User';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/account" element={<Main />} />
        <Route path="/account/user/:userid" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
