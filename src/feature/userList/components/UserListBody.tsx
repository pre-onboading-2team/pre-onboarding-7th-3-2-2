/* eslint-disable react/no-array-index-key */
/* eslint-disable import/extensions */
import React from 'react';

import { UserListResponseProps } from '../../../types/user';
import UserListItem from './UserListItem';

interface UserListBodyProps {
  userList: UserListResponseProps;
}

export default function UserListBody({ userList }: UserListBodyProps) {
  if (userList.length === 0) {
    return (
      <tbody>
        <tr>
          <div>데이터가 없습니다.</div>
        </tr>
      </tbody>
    );
  }
  return (
    <tbody>
      {userList.map((userLists, idx) => (
        <UserListItem key={idx} userLists={userLists} />
      ))}
    </tbody>
  );
}
