import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { UserDataType } from '../pages/Main/Main';

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

interface DataTableProps {
  data: Array<UserDataType>;
}

export default function DataTable({ data }: DataTableProps) {
  let mock = {
    209: '유안타증권',
    218: '현대증권',
    230: '미래에셋증권',
    238: '대우증권',
    240: '삼성증권',
    243: '한국투자증권',
    247: '우리투자증권',
    261: '교보증권',
    262: '하이투자증권',
    263: 'HMC투자증권',
    264: '키움증권',
    265: '이베스트투자증권',
    266: 'SK증권',
    267: '대신증권',
    268: '아이엠투자증권',
    269: '한화투자증권',
    270: '하나대투자증권',
    279: '동부증권',
    280: '유진투자증권',
    288: '카카오페이증권',
    287: '메리츠종합금융증권',
    290: '부국증권',
    291: '신영증권',
    292: 'LIG투자증권',
    271: '토스증권',
  };

  let numberStatus = {
    9999: '관리자확인필요',
    1: '입금대기',
    2: '운용중',
    3: '투자중지',
    4: '해지',
  };

  const rowsData = data.map(item => {
    return {
      id: item.id,
      userName: item.user.name,
      brokerName: mock[item.broker_id],
      number: item.number,
      status: numberStatus[item.status],
      name: item.name,
      assets: '₩ ' + item.assets,
      payments: '₩ ' + item.payments,
      is_active: item.is_active ? '활성화' : '비활성화',
      created_at: item.created_at,
    };
  });

  const rows = rowsData;

  return (
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={11}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
