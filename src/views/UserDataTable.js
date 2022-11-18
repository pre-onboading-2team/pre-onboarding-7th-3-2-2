import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'userName', headerName: '고객명', width: 100 },
  { field: 'birth_date', headerName: '생년월일', width: 130 },
  { field: 'age', headerName: '나이', width: 100 },
  { field: 'gender_origin', headerName: '성별', width: 100 },
  { field: 'email', headerName: '이메일', width: 130 },
  { field: 'number', headerName: '계좌번호', width: 150 },
  { field: 'created_at', headerName: '계좌개설일', width: 130 },
  { field: 'address', headerName: '주소', width: 120 },
  { field: 'detail_address', headerName: '상세주소', width: 150 },
];

export default function UserDataTable(props) {
  const { userList } = props;
  const rowsData = [];

  userList.forEach((item, idx) => {
    rowsData.push({
      id: idx,
      userName: item.name,
      birth_date: item.birth_date,
      age: item.age,
      gender_origin: item.gender_origin,
      email: item.email,
      number: item.number,
      created_at: item.created_at,
      address: item.address,
      detail_address: item.detail_address,
    });
  });

  const rows = rowsData;
  return (
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
