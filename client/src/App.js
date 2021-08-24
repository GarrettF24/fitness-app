import "./App.css";
import { useEffect, useState } from "react";
import { baseURL, config } from "./services";
import axios from "axios";
import Nav from "./components/Nav";
import Form from "./components/Form";
import { Route } from "react-router-dom";
import History from "./components/History";
import SocialMedia from "./components/SocialMedia";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);
  useEffect(() => {
    const fetchWorkouts = async () => {
      const resp = await axios.get(baseURL, config);
      console.log(resp.data);
      setWorkouts(resp.data.records);
    };
    fetchWorkouts();
  }, [toggleFetch]);
  return (
    <>
      <Nav />
      <Route path="/" exact>
        <Form setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/history">
        <History workouts={workouts} />
      </Route>
      <Route path="/update/:id">
        <Form workouts={workouts} setToggleFetch={setToggleFetch} />
      </Route>
      <SocialMedia />
    </>
  );
}

export default App;
