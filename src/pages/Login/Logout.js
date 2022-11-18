import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



const Logout = () => {
  const navigate = useNavigate();
  const goMain = () => {
    navigate('/');
  };



  }
  return (
    <div className="loginWrap">
      <h1 className="title">PREFACE</h1>
      <div className="loginFoam">
        <div className="loginHeader">
          <FontAwesomeIcon icon={faUser} className="search" />
          로그인
        </div>
        <div className="inputWrap">
          <div className="idWrap">
            <input
              name="id"
              className="idFoam"
              placeholder="아이디를 입력하세요"
              onChange={inputVal}
            />
            <FontAwesomeIcon icon={faUser} className="idUser" />
          </div>
          <div className="pwWrap">
            <input
              name="pw"
              type="text"
              className="pwFoam"
              placeholder="비밀번호를 입력하세요"
              onChange={inputVal}
            />
            <FontAwesomeIcon icon={faLock} className="pwUser" />
          </div>
        </div>

        <div className="btnWrap">
          <button
            className="loginBtn"
            disabled={val}
            type="button"
            onClick={loginClcik}
          >
            로그인
            <FontAwesomeIcon icon={faRightToBracket} className="loginIcon" />
          </button>
        </div>
      </div>
      <p className="copy">ⓒ December and Company</p>
    </div>
  );
};

export default Logout;
