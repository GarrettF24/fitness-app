import "./History.css";
import { Table } from "react-bootstrap";
import TableRow from "../components/TableRow";
import { useState, useEffect } from "react";

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

    const tableObj = {};
    dates.forEach((date) => {
      //Creates key of date, filtering thru W/O only bringing back objects that match date.
      //map thru unique arr dates, feed the empty tableObj a key of that date and val an arr of objs that match date.
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
            <h4>
              {table[0].createdTime.split("T")[0]}
              <div className="checkbox">{/* <input type="checkbox" /> */}</div>
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
