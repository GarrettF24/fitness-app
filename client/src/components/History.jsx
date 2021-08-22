import Update from "./Update";
import { Link, Route } from "react-router-dom";
import "./History.css";

function History(props) {
  const { workouts } = props;
  return (
    <>
      <h1>This is the history component</h1>
      {workouts.map((workout, index) => {
        const { exercise, sets, reps, rest, weight } = workout.fields;
        return (
          <>
            <article>
              {/* Need to store each object into an array to respresent each workout */}
              <p>
                Exercise: {exercise} | Sets: {sets} | Reps: {reps} | Rest:
                {rest}| Weight: {weight}
              </p>
              <Route path="/update">
                <Link to="/update">
                  <button>Update</button>
                </Link>
                <Update />
              </Route>
            </article>
          </>
        );
      })}
    </>
  );
}

export default History;
