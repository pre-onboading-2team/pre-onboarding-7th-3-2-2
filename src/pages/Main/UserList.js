import React, { useEffect, useState } from 'react';
import UserDataTable from '../../views/UserDataTable';
import Slider from '../../views/Slider';
import './User.scss';

const UserList = () => {
  const [userList, setList] = useState([]);
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
        setList(result);
      });
  }, []);

  return (
    <div className="userWrap">
      <Slider />
      <UserDataTable userList={userList} />
    </div>
  );
};
export default UserList;
