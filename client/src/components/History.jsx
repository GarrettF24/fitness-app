import Update from "./Update";
import { Link, Route } from "react-router-dom";

function History(props) {
  return (
    <>
      <h1>This is the history component</h1>
      <Route path="/update">
        <Link to="/update">
          <button>Update</button>
        </Link>
        <Update />
      </Route>
    </>
  );
}

export default History;
