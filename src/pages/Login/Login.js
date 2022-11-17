import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';

let idLength = 0;
let pwLength = 0;

const Login = () => {
  const [val, setVal] = useState(true);
  const navigate = useNavigate();
  const goMain = () => {
    navigate('/account');
  };

  function inputVal(e) {
    if (e.target.name === 'id') {
      idLength = e.target.value.length;
    } else {
      pwLength = e.target.value.length;
    }
    idLength >= 5 && pwLength >= 5 ? setVal(false) : setVal(true);
  }

  function runServer() {
    fetch('http://localhost:4000/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'newface@dco.com',
        password: 'super-strong-password',
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.accessToken) {
          localStorage.setItem('token', data.accessToken);
        }
      });
  }

  function loginClcik() {
    runServer();
    goMain();
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

export default Login;
