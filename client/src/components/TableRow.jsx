import React from "react";
import { Link } from "react-router-dom";

export default function TableRow(props) {
  const { exercise, reps, rest, sets, weight } = props.row.fields;

  return (
    <tr>
      <Link to={`/update/${props.row.id}`}>
        <td>{exercise}</td>
      </Link>
      <td>{reps}</td>
      <td>{rest}</td>
      <td>{sets}</td>
      <td>{weight}</td>
    </tr>
  );
}
