import { useState, useEffect } from "react";
import axios from "axios";
import { baseURL, config } from "../services";
import { useParams, useHistory } from "react-router-dom";

function Form(props) {
  //setState here
  const [exercise, setExercise] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [rest, setRest] = useState("");
  const [weight, setWeight] = useState("");
  const params = useParams();
  let history = useHistory();

  useEffect(() => {
    //If params.id and the workouts are true (present).
    if (params.id && props.workouts.length) {
      const workoutToEdit = props.workouts.find(
        //find the workout with params id equal to workout id. this is the workoutToEdit
        (workout) => params.id === workout.id
      );
      //If there is a workoutToEdit the states will equal the current values and user can update the state from there.
      if (workoutToEdit) {
        setExercise(workoutToEdit.fields.exercise);
        setSets(workoutToEdit.fields.sets);
        setReps(workoutToEdit.fields.reps);
        setRest(workoutToEdit.fields.rest);
        setWeight(workoutToEdit.fields.weight);
      }
    }
    //useEffect will be triggered and Form will rerender when params.id and props.workout changes.
  }, [params.id, props.workouts]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // onSubmit the newWorkout is created with each of the below getting a value that was assigned in the form.
    const newWorkout = {
      exercise,
      sets,
      reps,
      rest,
      weight,
    };
    //if params.id value is true(present)
    if (params.id) {
      // PUT/update the specified params id's newWorkout values
      await axios.put(
        `${baseURL}/${params.id}`,
        { fields: newWorkout },
        config
      );
      //The updated NewWorkout object gets pushed to /history route, in this case the History component.
      history.push("/history");
    } else {
      // If not updating/if params.id is not present, POST to the api+History component. After posting the current newWorkout, the states are set to empty strings so new values can be inputted.
      await axios.post(baseURL, { fields: newWorkout }, config);
      setExercise("");
      setSets("");
      setReps("");
      setRest("");
      setWeight("");
    }
    //This renders when the prevtogglefetch's bool val changes. Which will be everytime I need to render.
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
