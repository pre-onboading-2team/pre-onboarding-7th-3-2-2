import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'userName', headerName: '고객명', width: 70 },
  { field: 'brokerName', headerName: '증권사', width: 80 },
  { field: 'number', headerName: '계좌번호', width: 80 },
  { field: 'status', headerName: '운용상태', width: 70 },
  { field: 'name', headerName: '계좌명', width: 100 },
  { field: 'assets', headerName: '평가금액', width: 150 },
  { field: 'payments', headerName: '입금금액', width: 100 },
  { field: 'is_active', headerName: '활성화', width: 100 },
  { field: 'created_at', headerName: '계좌개설일', width: 100 },
];

const rowsData = [];
rowsData.forEach(data => {
  rowsData.push({
    id: data.id,
    userName: data.userName,
    brokerName: data.broker_id,
    number: data.number,
    status: data.status,
    name: data.name,
    assets: data.assets,
    payments: data.payments,
    is_active: data.is_active,
    created_at: data.created_at,
  });
});

const rows = rowsData;

export default function DataTable(props) {
  const { data, user } = props;
  console.log(data);
  console.log(user);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
