import React, { useEffect, useState } from 'react';
import DataTable from '../../views/DataTable';
import Slider from '../../views/Slider';
import './Main.scss';

const Main = () => {
  const [data, setData] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetch('http://localhost:4000/accounts?_expand=user', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
      .then(response => response.json())
      .then(result => {
        setData(result);
      });
    console.log(token);
  }, []);

  return (
    <>
      <div className="mainWrap">
        <Slider />
        <DataTable data={data} />
      </div>
      <div className="siderBar" />
      <div className="contentWrap" />
      <div className="content" />
    </>
  );
};
export default Main;
