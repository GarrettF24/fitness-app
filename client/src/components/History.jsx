import { Link } from "react-router-dom";
import "./History.css";
import { Table } from "react-bootstrap";

function History(props) {
  const { workouts } = props;
  return (
    <>
      <h1>This is the history component</h1>
      <div className="workouts">
        {workouts.map((workout) => {
          // console.log(workout.createdTime);
          const cleanDate = workout.createdTime.split("T");
          console.log(cleanDate[0]);
          const { exercise, sets, reps, rest, weight } = workout.fields;
          return (
            <>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Exercise</th>
                    <th>Sets</th>
                    <th>Reps</th>
                    <th>Rest</th>
                    <th>Weight</th>
                    <th>Date</th>
                    <th>
                      <Link to={`/update/${workout.id}`}>
                        <button>Update</button>
                      </Link>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{exercise}</td>
                    <td>{sets}</td>
                    <td>{reps} </td>
                    <td>{rest} </td>
                    <td>{weight} </td>
                    <td>{cleanDate[0]}</td>
                    <td>
                      <input type="checkbox" />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </>
          );
        })}
      </div>
    </>
  );
}

export default History;
