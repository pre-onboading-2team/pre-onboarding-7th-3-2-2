import React from 'react';

export default function UserListHeader() {
  return (
    <div>
      <tr>
        <th>이름</th>
        <th>보유중인 계좌수</th>
        <th>이메일</th>
        <th>핸드폰</th>
        <th>성별</th>
        <th>생년월일</th>
        <th>최근 로그인</th>
        <th>가입일</th>
        <th>혜택 수신 동의 여부</th>
        <th>활성화 여부</th>
      </tr>
    </div>
  );
}
