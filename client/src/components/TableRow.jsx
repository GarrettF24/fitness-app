import React from "react";

export default function TableRow(props) {
  const { exercise, reps, rest, sets, weight } = props.row.fields;

  return (
    <tr>
      <td>{exercise}</td>
      <td>{reps}</td>
      <td>{rest}</td>
      <td>{sets}</td>
      <td>{weight}</td>
    </tr>
  );
}
