import React, { useEffect } from 'react';
import DataTable from '../../views/DataTable';
import Slider from '../../views/Slider';
import './Main.scss';

const Main = () => {
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetch('http://localhost:4000/accounts', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      }, []);

    return (
      <>
        <div className="mainWrap">
          안녕하세요
          <Slider />
          <DataTable />
        </div>
        <div className="siderBar" />
        <div className="contentWrap" />
        <div className="content" />
      </>
    );
  });
};
export default Main;
