import "./App.css";
import { useEffect, useState } from "react";
import { baseURL, config } from "./services";
import axios from "axios";
import Nav from "./components/Nav";
import Form from "./components/Form";
import { Route } from "react-router-dom";
import History from "./components/History";
import SocialMedia from "./components/SocialMedia";

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
  return (
    <>
      <Nav />
      <Route path="/" exact>
        <Form />
      </Route>
      <Route path="/history">
        <History />
      </Route>
      <SocialMedia />
    </>
  );
}

export default App;
