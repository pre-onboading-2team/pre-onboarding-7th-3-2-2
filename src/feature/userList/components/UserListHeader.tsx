import React from 'react';

export default function UserListHeader() {
  return (
    <div className="flex justify-around">
      <tr className="flex justify-around">
        <td className="p-4">이름</td>
        <td className="p-4">보유중인 계좌수</td>
        <td className="p-4">이메일</td>
        <td className="p-4">핸드폰</td>
        <td className="p-4">성별</td>
        <td className="p-4">생년월일</td>
        <td className="p-4">최근 로그인</td>
        <td className="p-4">가입일</td>
        <td className="p-4">혜택 수신 동의 여부</td>
        <td className="p-4">활성화 여부</td>
      </tr>
    </div>
  );
}
