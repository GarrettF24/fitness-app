// import Update from "./Update";
// import { Link, Route } from "react-router-dom";

function History(props) {
  const { workouts } = props;
  return (
    <>
      <h1>This is the history component</h1>
      {/* <Route path="/update">
        <Link to="/update">
        <button>Update</button>
        </Link>
        <Update />
      </Route> */}
      {workouts.map((workout, index) => {
        const { exercise, sets, reps, rest, weight } = workout.fields;
        <article>
          <p>{exercise}</p>
          <p>{sets}</p>
          <p>{reps}</p>
          <p>{rest}</p>
          <p>{weight}</p>
        </article>;
      })}
    </>
  );
}

export default History;
