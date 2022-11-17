export type UserListResponseProps = Array<UserFetchResponseProps>;

export interface UserResponseProps {
  accessToken: string;
  user: UserProps;
}

export interface UserFetchResponseProps {
  address: string;
  age: number;
  birth_date: string;
  created_at: string;
  detail_address: string;
  email: string;
  gender_origin: number;
  id: number;
  last_login: string;
  name: string;
  phone_number: string;
  photo: string;
  updated_at: Date;
  uuid: string;
}

export interface UserSettingProps {
  id: number;
  uuid: string;
  allow_marketing_push: boolean;
  allow_invest_push: boolean;
  is_active: boolean;
  is_staff: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface UserInputProps {
  email: string;
  password: string;
}

type GenderOriginProps = '남' | '여';

interface UserProps {
  id: number;
  email: string;
  name: string;
}
