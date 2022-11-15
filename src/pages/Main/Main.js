import React, { useEffect, useState } from 'react';
import DataTable from '../../views/DataTable';
import Slider from '../../views/Slider';
import axios from 'axios';
import './Main.scss';

const Main = () => {
  const [data, setData] = useState([]);
  const token = localStorage.getItem('token');

  const header = {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  };
  useEffect(() => {
    axios
      .get('http://localhost:4000/accounts', header)
      .then(({ data }) => setData(data));
  }, []);
  console.log(data);

  return (
    <>
      <div className="mainWrap">
        <Slider />
        <DataTable />
      </div>
      <div className="siderBar" />
      <div className="contentWrap" />
      <div className="content" />
    </>
  );
};
export default Main;
