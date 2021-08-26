import "./History.css";
import { Table } from "react-bootstrap";
import TableRow from "../components/TableRow";
import { useState, useEffect } from "react";

function History(props) {
  const [tableInfo, setTableInfo] = useState([]);
  const { workouts } = props;

  useEffect(() => {
    //date = each workout return the date so only year/month/day is shown.
    const dates = [
      ...new Set(
        workouts.map((workout) => {
          return workout.createdTime.split("T")[0];
        })
      ),
    ];

    const tableObj = {};
    dates.forEach((date) => {
      //returns a workout if the date is equalled to the workouts createdTime split at T, so date(year/month/day) === match(year/month/day)
      tableObj[date] = workouts.filter((workout) => {
        let match = workout.createdTime.split("T")[0];
        return date === match;
      });
    });
    //sets the tableInfo to the values of the tableObj
    setTableInfo(Object.values(tableObj));
    //rerenders if workouts is present.
  }, [workouts]);

  let heading = ["Exercise", "Reps", "Rest", "Sets", "Weight"];

  return (
    <>
      <div id="history-title">
        <h1>View Past and Upcoming Workouts</h1>
      </div>
      <div className="tableDiv">
        {/* create a table for each element in tableInfo */}
        {tableInfo.map((table) => (
          <div className="date-table-container">
            {/* The title will be tables createdTime split as T and selects the 0 element. So year/month/day followed by checkbox */}
            <h4>
              {table[0].createdTime.split("T")[0]}
              <div className="checkbox">{/* <input type="checkbox" /> */}</div>
            </h4>
            <Table striped bordered hover>
              <thead>
                <tr>
                  {/* has one of each of the elements in heading array in row for table heading */}
                  {heading.map((head) => (
                    <th>{head}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Each row is equal to the value of each of the table heading keys. */}
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
