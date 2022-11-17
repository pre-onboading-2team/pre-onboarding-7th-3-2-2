import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'userName', headerName: '고객명', width: 70 },
  { field: 'brokerName', headerName: '증권사', width: 80 },
  { field: 'number', headerName: '계좌번호', width: 150 },
  { field: 'status', headerName: '운용상태', width: 70 },
  { field: 'name', headerName: '계좌명', width: 150 },
  { field: 'assets', headerName: '평가금액', width: 150 },
  { field: 'payments', headerName: '입금금액', width: 150 },
  { field: 'is_active', headerName: '활성화', width: 100 },
  { field: 'created_at', headerName: '계좌개설일', width: 110 },
];

export default function DataTable(props) {
  const { data } = props;
  const rowsData = [];

  data.forEach(item => {
    rowsData.push({
      id: item.id,
      userName: item.user.name,
      brokerName: item.broker_id,
      number: item.number,
      status: item.status,
      name: item.name,
      assets: '₩ ' + item.assets,
      payments: '₩ ' + item.payments,
      is_active: item.is_active ? '활성화' : '비활성화',
      created_at: item.created_at,
    });
  });

  const rows = rowsData;

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
