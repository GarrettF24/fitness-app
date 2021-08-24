import { Link } from "react-router-dom";
import "./History.css";
import { Table } from "react-bootstrap";
import TableRow from "../components/TableRow";
import { useState, useEffect } from "react";

function History(props) {
  const [tableInfo, setTableInfo] = useState([]);
  const { workouts } = props;

  useEffect(() => {
    const dates = [
      ...new Set(
        workouts.map((workout) => {
          return workout.createdTime.split("T")[0];
        })
      ),
    ];

    const tableObj = {};

    dates.forEach((date) => {
      tableObj[date] = workouts.filter((workout) => {
        let match = workout.createdTime.split("T")[0];
        return date === match;
      });
    });

    setTableInfo(Object.values(tableObj));
  }, [workouts]);

  let heading = ["Exericse", "Reps", "Rest", "Sets", "Weight"];

  return (
    <>
      <div>
        {tableInfo.map((table) => (
          <>
            <h3>{table[0].createdTime.split("T")[0]}</h3>
            <Table striped bordered hover>
              <thead>
                <tr>
                  {heading.map((head) => (
                    <th>{head}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.map((row) => (
                  <TableRow row={row} />
                ))}
              </tbody>
            </Table>
          </>
        ))}
      </div>
    </>
  );
}

export default History;
