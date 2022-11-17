import { axios } from './axios';

import {
  UserSettingProps,
  UserListResponseProps,
  UserFetchResponseProps,
  UserInputProps,
  UserResponseProps,
} from '../types/user';

export async function requestLogin(body: UserInputProps) {
  const { data } = await axios.post<UserResponseProps>('/login', body);

  return data;
}

export async function fetchUser(userId: number) {
  const { data } = await axios.get<UserFetchResponseProps>(`/users/${userId}`);

  return data;
}

export async function getUserSetting(uuid: string) {
  const { data } = await axios.get<UserSettingProps>(
    `/userSetting?uuid=${uuid}`
  );

  return data;
}

export async function fetchUserList(page: string | string[]) {
  const { data } = await axios.get<UserListResponseProps>(
    `/users?_page=${page}&_limit=20`
  );

  return data;
}
