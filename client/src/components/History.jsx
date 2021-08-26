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
      <div id="history-title">
        <h1>View Past and Upcoming Workouts</h1>
      </div>
      <div className="tableDiv">
        {tableInfo.map((table) => (
          <div className="date-table-container">
            <h4>
              {table[0].createdTime.split("T")[0]}
              <div className="checkbox">
                <input type="checkbox" />
              </div>
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
          </div>
        ))}
      </div>
    </>
  );
}

export default History;
