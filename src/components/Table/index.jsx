import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  // TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    maxWidth: 600,
  },
  tableCont: {
    maxWidth: 600,
    marginTop: 50,
  },
  tableCell: {
    border: "1px solid gainsboro",
  },
});

const MyTable = ({ row, col }) => {
  console.log(row, col, "::");
  let rows = new Array(parseInt(row)).fill(" ");
  let cols = new Array(parseInt(col)).fill(" ");
  console.log("::", rows, cols, typeof rows);
  const classes = useStyles();
  return (
    <center>
      <TableContainer component={Paper} className={classes.tableCont}>
        <Table className={classes.table} aria-label="simple table">
          <TableBody>
            {rows.map((row, i) => (
              <TableRow key={i}>
                {cols.map((col, i) => (
                  <TableCell
                    component="th"
                    scope="row"
                    key={i}
                    className={classes.tableCell}
                  ></TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </center>
  );
};

export default MyTable;
