import Update from "./Update";
import { Link } from "react-router-dom";
import "./History.css";

function History(props) {
  const { workouts } = props;
  return (
    <>
      <h1>This is the history component</h1>
      <div className="workouts">
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
                <Link to="/update/:id">
                  <button>Update</button>
                </Link>
              </article>
            </>
          );
        })}
      </div>
    </>
  );
}

export default History;
