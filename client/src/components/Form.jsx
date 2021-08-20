import { useState } from "react";

function Form(props) {
  const [exercise, setExercise] = useState("");
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);
  const [rest, setRest] = useState(0);
  const [weight, setWeight] = useState(0);
  return <h1>This is form component</h1>;
}

export default Form;
