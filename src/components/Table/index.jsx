import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    maxWidth: 600,
  },
  tableCont: {
    maxWidth: 600,
    marginTop: 40,
  },
  tableCell: {
    border: "1px solid gainsboro",
  },
});

const MyTable = ({ row, col }) => {
  const noRow = parseInt(row);
  const noCol = parseInt(col);
  const matrix = new Array(noRow).fill(0).map(() => new Array(noCol).fill(0));
  let [currentRow, setCurrentRow] = useState(0);
  let [currentCol, setCurrentCol] = useState(0);
  const [currentCell, setCurrentCell] = useState(
    matrix[currentRow][currentCol]
  );
  const classes = useStyles();
  const handleBtn = (e) => {
    switch (e.target.name) {
      case "left":
        if (currentCol > 0) currentCol = currentCol - 1;
        setCurrentCol(currentCol);
        setCurrentCell(matrix[currentRow][currentCol]);
        break;
      case "up":
        if (currentRow > 0) currentRow = currentRow - 1;
        setCurrentRow(currentRow);
        setCurrentCell(matrix[currentRow][currentCol]);
        break;
      case "right":
        if (currentCol < noCol - 1) currentCol = currentCol + 1;
        setCurrentCol(currentCol);
        setCurrentCell(matrix[currentRow][currentCol]);
        break;
      case "down":
        if (currentRow < noRow - 1) currentRow = currentRow + 1;
        setCurrentRow(currentRow);
        setCurrentCell(matrix[currentRow][currentCol]);
        break;
      default:
        break;
    }
  };
  return (
    <center>
      <div className="btnContainer">
        <div>
          <button name="up" onClick={handleBtn}>
            &uarr;
          </button>
        </div>
        <div>
          <button name="left" onClick={handleBtn}>
            &larr;
          </button>
          <button name="right" onClick={handleBtn}>
            &rarr;
          </button>
        </div>
        <div>
          <button name="down" onClick={handleBtn}>
            &darr;
          </button>
        </div>
      </div>
      <TableContainer component={Paper} className={classes.tableCont}>
        <Table className={classes.table} aria-label="simple table">
          <TableBody>
            {matrix.map((row, i) => (
              <TableRow key={i}>
                {row.map((col, j) => (
                  <TableCell
                    component="th"
                    scope="row"
                    key={j}
                    className={`${classes.tableCell} ${
                      i === currentRow && j === currentCol ? "selected" : ""
                    }`}
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
