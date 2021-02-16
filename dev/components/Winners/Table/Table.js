import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Pagination from '@material-ui/lab/Pagination';

import './Table.scss'

const columns = [
  { 
    id: 'date',
    label: 'Дата',
    },
  { 
    id: 'email',
    label: 'e-mail',
 },
  {
    id: 'name',
    label: 'имя',
  },
  {
    id: 'priz',
    label: 'приз',
  },
];

function createData(date, email, name, priz) {
    return { date, email, name, priz };
  }

const rows = [
    createData('25.02.21', 'r.bol***@ya.ru', 'Роман', 'Еженедельный'),
    createData('25.02.21', 'r.bol***@ya.ru', 'Evgeny', 'Еженедельный'),
    createData('25.02.21', 'anya***@yahoo.com', 'Анна', 'Еженедельный'),
    createData('25.02.21', 'r.bol***@ya.ru', 'Роман', 'Еженедельный'),
    createData('25.02.21', 'anya***@yahoo.com', 'Анна', 'Еженедельный'),
    createData('25.02.21', 'r.bol***@ya.ru', 'Роман', 'Еженедельный'),
    createData('25.02.21', 'anya***@yahoo.com', 'Анна', 'Еженедельный'),
    createData('25.02.21', 'r.bol***@ya.ru', 'Роман', 'Еженедельный'),
    createData('25.02.21', 'anya***@yahoo.com', 'Анна', 'Еженедельный'),
    createData('25.02.21', 'r.bol***@ya.ru', 'Роман', 'Еженедельный'),
    createData('25.02.21', 'anya***@yahoo.com', 'Анна', 'Еженедельный'),
    createData('25.02.21', 'r.bol***@ya.ru', 'Роман', 'Еженедельный'),
    createData('25.02.21', 'anya***@yahoo.com', 'Анна', 'Еженедельный'),
    createData('25.02.21', 'r.bol***@ya.ru', 'Роман', 'Еженедельный'),
    createData('25.02.21', 'anya***@yahoo.com', 'Анна', 'Еженедельный'),
    createData('25.02.21', 'anya***@yahoo.com', 'Анна', 'Еженедельный'),

];


export default function StickyHeadTable() {
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Paper className={'table'}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow className={'tableHeader'}>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice((page-1) * rowsPerPage, (page-1) * rowsPerPage + rowsPerPage).map((row, id) => {
              return (
                <TableRow hover tabIndex={-1} key={id}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} className={'tableCell'}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      
      <Pagination
      className={'tablePagination'}
      count={Math.ceil(rows.length/5)} 
      page={page} 
      onChange={handleChangePage}  
      />
    </Paper>
  );
}