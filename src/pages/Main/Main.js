import React from 'react';
import Sider from './Sider';
import './Main.scss';

const Main = () => {
  return (
    <div>
      <Sider />
      <div className="siderBar" />
      <div className="contentWrap">
        <div className="content" />
      </div>
    </div>
  );
};

export default Main;
