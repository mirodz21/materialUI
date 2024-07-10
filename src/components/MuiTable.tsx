import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import React from "react";

const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell>first name</TableCell>
            <TableCell>last name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.firstName}</TableCell>
              <TableCell>{row.lastName}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const tableData = [
  {
    id: 1,
    firstName: "Ian",
    lastName: "Rodriguez",
    email: "ian@gmail.com",
  },
  {
    id: 1,
    firstName: "Ian",
    lastName: "Rodriguez",
    email: "ian@gmail.com",
  },
  {
    id: 1,
    firstName: "Ian",
    lastName: "Rodriguez",
    email: "ian@gmail.com",
  },
  {
    id: 1,
    firstName: "Ian",
    lastName: "Rodriguez",
    email: "ian@gmail.com",
  },
  {
    id: 1,
    firstName: "Ian",
    lastName: "Rodriguez",
    email: "ian@gmail.com",
  },
  {
    id: 1,
    firstName: "Ian",
    lastName: "Rodriguez",
    email: "ian@gmail.com",
  },
  {
    id: 1,
    firstName: "Ian",
    lastName: "Rodriguez",
    email: "ian@gmail.com",
  },
  {
    id: 1,
    firstName: "Ian",
    lastName: "Rodriguez",
    email: "ian@gmail.com",
  },
  {
    id: 1,
    firstName: "Ian",
    lastName: "Rodriguez",
    email: "ian@gmail.com",
  },
  {
    id: 1,
    firstName: "Ian",
    lastName: "Rodriguez",
    email: "ian@gmail.com",
  },
  {
    id: 1,
    firstName: "Ian",
    lastName: "Rodriguez",
    email: "ian@gmail.com",
  },
  {
    id: 1,
    firstName: "Ian",
    lastName: "Rodriguez",
    email: "ian@gmail.com",
  },
];
export default MuiTable;
