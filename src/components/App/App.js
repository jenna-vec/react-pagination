import './App.css';
import React from 'react';
import { useState, useMemo } from 'react';
import Pagination from '../Pagination/Pagination';
import users from '../../data/users.json';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

let PageSize = 10;

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const currentUsers = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return users.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <>
      <div className='center'>
        <TableContainer component={Paper}>
          <Table aria-label="Users Data">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentUsers.map((entry) => (
                <TableRow
                  key={entry.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>{entry.id}</TableCell>
                  <TableCell>{entry.first_name}</TableCell>
                  <TableCell>{entry.last_name}</TableCell>
                  <TableCell>{entry.email}</TableCell>
                  <TableCell>{entry.phone}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={users.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
    </>
  );
}

export default App;
