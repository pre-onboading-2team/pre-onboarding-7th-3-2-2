import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'userName', headerName: '고객명', width: 150 },
  { field: 'birth_date', headerName: '생년월일', width: 130 },
  { field: 'age', headerName: '나이', width: 100 },
  { field: 'gender_origin', headerName: '성별', width: 100 },
  { field: 'email', headerName: '이메일', width: 150 },
  { field: 'created_at', headerName: '계좌개설일', width: 130 },
  { field: 'address', headerName: '주소', width: 150 },
  { field: 'detail_address', headerName: '상세주소', width: 200 },
];

export default function UserDataTable(props) {
  const { userList } = props;
  const rowsData = [];

  userList.forEach((item, idx) => {
    rowsData.push({
      id: idx,
      userName: item.name,
      birth_date: item.birth_date && item.birth_date.substring(0, 10),
      age: item.age,
      gender_origin: item.gender_origin === 1 ? '남성' : '여성',
      email: item.email,
      created_at: item.created_at && item.created_at.substring(0, 10),
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
