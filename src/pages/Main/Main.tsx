import React, { useEffect, useState } from 'react';
import DataTable from '../../views/DataTable';
import Slider from '../../views/Slider';
import './Main.scss';

type BrokerIdType =
  | 209
  | 218
  | 230
  | 238
  | 240
  | 243
  | 247
  | 261
  | 262
  | 263
  | 264
  | 265
  | 266
  | 267
  | 268
  | 269
  | 270
  | 279
  | 280
  | 288
  | 287
  | 290
  | 291
  | 292
  | 271;

type NumberStatusType = 1 | 2 | 3 | 4 | 9999;

interface UserType {
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
  updated_at: string;
  uuid: string;
}

export type UserDataType = {
  assets: string;
  broker_id: BrokerIdType;
  created_at: string;
  id: number;
  is_active: boolean;
  name: string;
  number: string;
  payments: string;
  status: NumberStatusType;
  updated_at: string;
  user: UserType;
  userId: number;
  uuid: string;
};

const Main = () => {
  const [data, setData] = useState<Array<UserDataType> | null>(
    [] as UserDataType[]
  );
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetch('http://localhost:4000/accounts?_expand=user', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
      .then(response => response.json())
      .then((result: Array<UserDataType>) => {
        setData(result);
      });
    console.log(token);
  }, []);

  if (!data) return <div>No data</div>;

  return (
    <>
      <div className="mainWrap">
        <Slider />
        <DataTable data={data} />
      </div>
      <div className="siderBar" />
      <div className="contentWrap" />
      <div className="content" />
    </>
  );
};
export default Main;
