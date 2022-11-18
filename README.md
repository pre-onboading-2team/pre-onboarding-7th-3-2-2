# pre-onboarding-7th-3-2-2

# Week 3-2. 투자 관리 서비스의 관리자 기능 구현

<br />

1. [팀 소개 👫](#1-팀-소개-)
2. [프로젝트 소개 🚀](#2-프로젝트-소개-)
3. [기술 스택 🛠](#3-기술-스택-)
4. [구현 기능 📍](#4-구현-기능-)
5. [프로젝트 구조 🗂](#5-프로젝트-구조-)
6. [Best Practice 선정과정👩‍👦‍👦](#6-best-practice-선정과정)
7. [프로젝트 설치 및 실행 ✨](#7-프로젝트-설치-및-실행-)  

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
  - 로그인 기능 구현
  - 계좌목록 조회 기능 구현
  - 계좌목록  페이지네이션 기능 구현
  - 사용자상세 조회 기능 구현
  - 사용자상세 페이지네이션 기능 구현

<br />

## 5. 프로젝트 구조 🗂

```bash
src
 ┣ pages // 페이지 컴포넌트
 ┗ views // 도메인별 컴포넌트 관리
```

<br/>


## 6. Best Practice 선정과정👩‍👦‍👦

### MUI DataGrid 를 활용한 필터링 및 검색 기능 기능 구현

<img width="378" alt="스크린샷 2022-11-18 오전 10 26 49" src="https://user-images.githubusercontent.com/107467812/202595574-cdb48371-5416-4c6e-be36-35acb0150fd2.png">

```js
// src/views/DataTable.js

<DataGrid
        rows={rows}
        columns={columns}
        pageSize={11}
        checkboxSelection
        disableSelectionOnClick
        onCellClick={pageDetail}
      />

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

1. 관련 패키지 설치

``` 
$ npm install
```

2. 로컬 서버 실행

```
$ npm start
```










