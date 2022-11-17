import React from 'react';

export default function AccountHeader() {
  return (
    <div>
      <tr>
        <th className="p-4">고객명</th>
        <th className="p-4">브로커명</th>
        <th className="p-4">계좌번호</th>
        <th className="p-4">계좌상태</th>
        <th className="p-4">계좌명</th>
        <th className="p-4">평가금액</th>
        <th className="p-4">입금금액</th>
        <th className="p-4">계좌활성화여부</th>
        <th className="p-4">계좌개설일</th>
      </tr>
    </div>
  );
}
