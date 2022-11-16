import { axios } from './axios';

import { AccountsResponseProps } from '../types/accounts';

export default async function fetchAccounts(page: string | string[]) {
  const { data } = await axios.get<AccountsResponseProps>(
    `/accounts?_page=${page}&_limit=20`
  );

  return data;
}
