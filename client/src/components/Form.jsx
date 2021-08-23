import { useState, useEffect } from "react";
import axios from "axios";
import { baseURL, config } from "../services";
import { useParams, useHistory } from "react-router-dom";

function Form(props) {
  const [exercise, setExercise] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [rest, setRest] = useState("");
  const [weight, setWeight] = useState("");
  const params = useParams();
  let history = useHistory();

  useEffect(() => {
    if (params.id && props.workouts.length) {
      const workoutToEdit = props.workouts.find(
        (workout) => params.id === workout.id
      );
      if (workoutToEdit) {
        setExercise(workoutToEdit.fields.exercise);
        setSets(workoutToEdit.fields.sets);
        setReps(workoutToEdit.fields.reps);
        setRest(workoutToEdit.fields.rest);
        setWeight(workoutToEdit.fields.weight);
      }
    }
  }, [params.id, props.workouts]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newWorkout = {
      exercise,
      sets,
      reps,
      rest,
      weight,
    };
    if (params.id) {
      await axios.put(
        `${baseURL}/${params.id}`,
        { fields: newWorkout },
        config
      );
      history.push("/history");
    } else {
      await axios.post(baseURL, { fields: newWorkout }, config);
      setExercise("");
      setSets("");
      setReps("");
      setRest("");
      setWeight("");
    }
    props.setToggleFetch((prevToggleFetch) => !prevToggleFetch);
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
      <label htmlFor="rest">Rest</label>
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
      <button type="button">+</button>
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
