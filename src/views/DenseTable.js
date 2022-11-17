import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function DenseTable(props) {
  const { users } = props;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>이름</TableCell>
            <TableCell>나이</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>생년월일</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>주소</TableCell>
            <TableCell>이메일</TableCell>
            <TableCell>핸드폰</TableCell>
            <TableCell>계좌개설일</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>{users.name}</TableCell>
            <TableCell>{users.age}</TableCell>
            <TableCell>{users.gender_origin === 1 ? '남성' : '여성'}</TableCell>
            <TableCell>
              {users.birth_date && users.birth_date.substring(0, 10)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{users.address}</TableCell>
            <TableCell>{users.email}</TableCell>
            <TableCell>{users.phone_number}</TableCell>
            <TableCell>
              {users.created_at && users.created_at.substring(0, 10)}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
