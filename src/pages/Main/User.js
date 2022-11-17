import React, { useEffect, useState } from 'react';
import './User.scss';

const User = () => {
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetch('http://localhost:4000/users', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
      .then(response => response.json())
      .then(result => {
        setUsers(result);
        console.log(users);
      });
  }, []);

  return <>안녕</>;
};
export default User;