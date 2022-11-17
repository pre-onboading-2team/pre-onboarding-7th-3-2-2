/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-useless-path-segments */
import React from 'react';

import { AccountsResponseProps } from '../../../types/accounts';
import AccountItem from '../components/AccountItem';

interface AccountsTableBodyProps {
  accounts: AccountsResponseProps;
}

export default function AccountBody({ accounts }: AccountsTableBodyProps) {
  if (accounts.length === 0) {
    return (
      <tbody>
        <tr>
          <th colSpan={9}>데이터가 없습니다.</th>
        </tr>
      </tbody>
    );
  }
  return (
    <tbody>
      {accounts.map((account, idx) => (
        <AccountItem key={idx} account={account} />
      ))}
    </tbody>
  );
}
