import React from "react";
import { Link } from "react-router-dom";
import "./TableRow.css";

export default function TableRow(props) {
  const { exercise, sets, reps, rest, weight } = props.row.fields;

  return (
    <tr>
      <Link id="update-link" to={`/update/${props.row.id}`}>
        <td>{exercise}</td>
      </Link>
      <td>{sets}</td>
      <td>{reps}</td>
      <td>{rest}</td>
      <td>{weight}</td>
    </tr>
  );
}
