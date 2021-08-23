import Update from "./Update";
import { Link } from "react-router-dom";
import "./History.css";

function History(props) {
  const { workouts } = props;
  return (
    <>
      <h1>This is the history component</h1>
      <div className="workouts">
        {workouts.map((workout) => {
          const { exercise, sets, reps, rest, weight } = workout.fields;
          return (
            <>
              <article>
                {/* Need to store each object into an array to respresent each workout */}
                <p>
                  Exercise: {exercise} | Sets: {sets} | Reps: {reps} | Rest:
                  {rest}| Weight: {weight}
                </p>
                <Link to={`/update/${workout.id}`}>
                  <button>Update</button>
                </Link>
                <input type="checkbox" />
              </article>
            </>
          );
        })}
      </div>
    </>
  );
}

export default History;
