import { useState } from "react";
import axios from "axios";
import { baseURL, config } from "../services";

function Form(props) {
  const [exercise, setExercise] = useState("");
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);
  const [rest, setRest] = useState(0);
  const [weight, setWeight] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newWorkout = {
      exercise,
      sets,
      reps,
      rest,
      weight,
    };
    await axios.post(baseURL, { fields: newWorkout }, config);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="exercise">Exercise</label>
      <input
        id="exercise"
        value={exercise}
        type="text"
        onChange={(e) => setExercise(e.target.value)}
      />
      <label htmlFor="sets">Sets</label>
      <input
        id="sets"
        value={sets}
        type="text"
        onChange={(e) => setSets(e.target.value)}
      />
      <label htmlFor="reps">Reps</label>
      <input
        id="reps"
        value={reps}
        type="text"
        onChange={(e) => setReps(e.target.value)}
      />
      <label htmlFor="rest">Rest(sec)</label>
      <input
        id="rest"
        value={rest}
        type="text"
        onChange={(e) => setRest(e.target.value)}
      />
      <label htmlFor="weight">Weight</label>
      <input
        id="weight"
        value={weight}
        type="text"
        onChange={(e) => setWeight(e.target.value)}
      />
      <button type="submit">Create Workout</button>
    </form>
  );
}

export default Form;
//add labels for now
//form tag inputs inside
//one row to start
//flex for inputs
//handleSubmit
//onsubmit on form itself.
