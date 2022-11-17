import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DenseTable from '../../views/DenseTable';
import Slider from '../../views/Slider';
import './User.scss';

const User = () => {
  const { userid } = useParams();

  const [users, setUsers] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetch(`http://localhost:4000/users/${userid}`, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
      .then(response => response.json())
      .then(result => {
        setUsers(result);
      });
  }, []);

  return (
    <div className="userWrap">
      <Slider />
      <DenseTable users={users} />
    </div>
  );
};
export default User;
