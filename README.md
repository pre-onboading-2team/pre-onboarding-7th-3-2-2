# pre-onboarding-7th-3-2-2

# Week 3-2. 투자 관리 서비스의 관리자 기능 구현

![ezgif com-gif-maker](https://user-images.githubusercontent.com/99943583/202637983-13ef1bcf-9464-439f-aa4c-04dcecc3a78d.gif)

<br />

1. [팀 소개 👫](#1-팀-소개-)
2. [프로젝트 소개 🚀](#2-프로젝트-소개-)
3. [기술 스택 🛠](#3-기술-스택-)
4. [구현 기능 📍](#4-구현-기능-)
5. [Best Practice 선정과정👩‍👦‍👦](#6-best-practice-선정과정)
6. [프로젝트 설치 및 실행 ✨](#7-프로젝트-설치-및-실행-)

<br />

## 1. 팀 소개 👫

- [이빛나 (팀장)](https://github.com/bitnaleeeee)
- [모상빈](https://github.com/Topbin2)
- [김진석](https://github.com/genuine-seok)
- [박우빈](https://github.com/Debonchocola)
- [이의연](https://github.com/strongpond)
- [조성호](https://github.com/CSH111)
- [전대원](https://github.com/eodnjs467)

<br />

## 2. 프로젝트 소개 🚀

- 개요 : 원티드 프론트엔드 프리온보딩 7기 2팀 과제 3-2 중 Best Practice
- 주제 : 투자 관리 서비스의 관리자 기능 구현
- 기간 : 2022.11.12 ~ 2022.11.18

<br />

## 3. 기술 스택 🛠

- Javascript
- React
- Mui

<br />

## 4. 구현 기능 📍

- 구현사항
  - 로그인, 로그아웃 기능 구현
  - 계좌목록 데이터 조회 기능 구현
  - 계좌목록 페이지네이션 기능 구현
  - 계좌 목록 사용자 이름 클릭시 사용자 정보 조회 기능 구현
  - 사용자상세 데이터 조회 기능 구현
  - 사용자상세 페이지네이션 기능 구현

<br />

## 6. Best Practice 선정과정👩‍👦‍👦

### json-server 을 활용 전체 데이터 조회 기능 구현

```js
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
```

### 사용자 이름 클릭시 해당 사용자 상세 정보 조회 기능 구현

```js
const pageDetail = e => {
  if (e.field === 'userName') {
    let val = data[e.row.id];
    navigate(`user/${val.id}`);
  }
};
```

```js
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
```

<br>

## 7. 프로젝트 설치 및 실행 ✨

<br/>

1. Git Clone

```plaintext
$ git clone https://github.com/pre-onboading-2team/pre-onboarding-7th-3-2-2.git
```

2. 프로젝트 패키지 설치

```plaintext
$ npm install
```

3. 프로젝트 실행

```plaintext
$ npm start
```

<br/>

### Server 실행 방법

/src/server 에 서버 폴더가 존재합니다
(cors이슈 해결방안으로 서버코드 수정한 상태입니다.)

1. 관련 패키지 설치

```
$ npm install
```

2. 로컬 서버 실행

```
$ npm start
```
