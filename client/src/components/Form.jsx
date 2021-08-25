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

  // const formH1 = `Create Workout`;
  // const updateH1 = `Update Workout`;

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
    <>
      <div className="title">
        <h1>Create a Workout</h1>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          placeholder="Exercise"
          id="exercise"
          value={exercise}
          type="text"
          onChange={(e) => setExercise(e.target.value)}
        />
        <input
          placeholder="Sets"
          id="sets"
          value={sets}
          type="text"
          onChange={(e) => setSets(e.target.value)}
        />
        <input
          placeholder="Reps"
          id="reps"
          value={reps}
          type="text"
          onChange={(e) => setReps(e.target.value)}
        />
        <input
          placeholder="Rest"
          id="rest"
          value={rest}
          type="text"
          onChange={(e) => setRest(e.target.value)}
        />
        <input
          placeholder="Weight"
          id="weight"
          value={weight}
          type="text"
          onChange={(e) => setWeight(e.target.value)}
        />
        <button type="submit">Create Workout</button>
      </form>
    </>
  );
}

export default Form;
