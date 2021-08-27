import "./History.css";
import { Table } from "react-bootstrap";
import TableRow from "../components/TableRow";
import { useState, useEffect } from "react";
import TimeTitle from "./TimeTitle";

function History(props) {
  const [tableInfo, setTableInfo] = useState([]);
  const { workouts } = props;

  useEffect(() => {
    // This creates an arr of unique dates
    const dates = [
      ...new Set(
        workouts.map((workout) => {
          return workout.createdTime.split("T")[0];
        })
      ),
    ];

    dates.sort((a, b) => {
      const dayValueA = a.split("-")[2];
      const monthValueA = a.split("-")[1];
      const dayValueB = b.split("-")[2];
      const monthValueB = b.split("-")[1];

      a = Number(dayValueA) + Number(monthValueA) * 100;
      b = Number(dayValueB) + Number(monthValueB) * 100;
      return b - a;
    });

    const tableObj = {};
    dates.forEach((date) => {
      //Creates key of date, filtering thru W/O only bringing back objects that match date.
      //Next map thru the arr of unique dates to feed the empty obj (tableObj) both a key of dates and an arr of objs w/ matching
      // dates as its value
      tableObj[date] = workouts.filter((workout) => {
        let match = workout.createdTime.split("T")[0];
        return date === match;
      });
    });
    //sets the tableInfo state to the values of the tableObj
    //next we set tableInfo state w/ just the vals of the tableObj(arr of arrs)
    setTableInfo(Object.values(tableObj));
    //rerenders if workouts is present.
  }, [workouts]);

  let heading = ["Exercise", "Sets", "Reps", "Rest", "Weight"];

  return (
    <>
      <div id="history-title">
        <h1>View Past and Upcoming Workouts</h1>
      </div>
      <div className="tableDiv">
        {tableInfo.map((table) => (
          <div className="date-table-container">
            <TimeTitle table={table} />
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
