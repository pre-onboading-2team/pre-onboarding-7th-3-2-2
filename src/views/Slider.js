import React from 'react';
import { Link } from 'react-router-dom';
import './Slider.scss';

const Slider = () => {
  return (
    <div className="sldierNav">
      <div className="sliderWrap">
        <div className="navHeader">DECEMBER</div>
        <div className="user">
          <Link to="/account"> 투자계좌</Link>
        </div>
        <div className="user">
          <Link to="/userlist">사용자 목록</Link>
        </div>
        <div className="logout">로그아웃</div>
      </div>
    </div>
  );
};

export default Slider;
