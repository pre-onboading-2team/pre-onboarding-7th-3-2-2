import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import brokers from './data/brokers.json';
import numberStatus from './data/numberStatus.json';
import './DataTable.scss';

const columns = [
  { field: 'userName', headerName: '고객명', width: 100 },
  { field: 'brokerName', headerName: '증권사', width: 120 },
  { field: 'number', headerName: '계좌번호', width: 150 },
  { field: 'status', headerName: '운용상태', width: 120 },
  { field: 'name', headerName: '계좌명', width: 150 },
  { field: 'assets', headerName: '평가금액', width: 150 },
  { field: 'payments', headerName: '입금금액', width: 150 },
  { field: 'is_active', headerName: '활성화', width: 100 },
  { field: 'created_at', headerName: '계좌개설일', width: 110 },
];

export default function DataTable(props) {
  const { data } = props;
  const rowsData = [];

  data.forEach((item, idx) => {
    rowsData.push({
      id: idx,
      userName: item.user.name,
      brokerName: brokers[item.broker_id],
      number: item.number,
      status: numberStatus[item.status],
      name: item.name,
      assets: '₩ ' + item.assets,
      payments: '₩ ' + item.payments,
      is_active: item.is_active ? '활성화' : '비활성화',
      created_at: item.created_at,
    });
  });

  const navigate = useNavigate();
  const rows = rowsData;

  const pageDetail = e => {
    if (e.field === 'userName') {
      let val = data[e.row.id];
      navigate(`user/${val.id}`);
    }
  };

  return (
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        className="girdStyle"
        rows={rows}
        columns={columns}
        pageSize={11}
        checkboxSelection
        disableSelectionOnClick
        onCellClick={pageDetail}
      />
    </div>
  );
}
