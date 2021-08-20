import "./App.css";
import { useEffect, useState } from "react";
import { baseURL, config } from "./services";
import axios from "axios";

function App() {
  const [workouts, setWorkouts] = useState([]);
  useEffect(() => {
    const fetchWorkouts = async () => {
      const resp = await axios.get(baseURL, config);
      console.log(resp.data);
      setWorkouts(resp.data.records);
    };
    fetchWorkouts();
  }, []);
  return <h1>This is the app component</h1>;
}

export default App;
