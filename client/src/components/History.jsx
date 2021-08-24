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

  let heading = ["Exercise", "Reps", "Rest", "Sets", "Weight"];

  return (
    <>
      <div className="tableDiv">
        {tableInfo.map((table) => (
          <>
            <h4>
              {table[0].createdTime.split("T")[0]}{" "}
              <span>
                <input type="checkbox" />
              </span>
            </h4>
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
