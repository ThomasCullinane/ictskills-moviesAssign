import React, { useEffect, useState }  from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import { getMovieCast } from "../../api/tmdb-api";
import { excerpt } from "../../util";

const useStyles = makeStyles({
  table: {
    minWidth: 550,
  },
});

export default function MovieCast({ movie }) {
  const classes = useStyles();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCast(movie.id).then((cast) => {
      setCast(cast);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="cast table">
        <TableHead>
          <TableRow>
            <TableCell >Charachter</TableCell>
            <TableCell align="center">Actor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cast.map((c) => (
            <TableRow key={c.cast.id}>
              <TableCell component="th" scope="row">
                {c.charachter}
              </TableCell>
              <TableCell >{c.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}