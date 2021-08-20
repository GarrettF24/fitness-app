import { Link } from "react-router-dom";
import "./Nav.css";

function Nav(props) {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/history">History</Link>
        <h1>Fitness-App</h1>
      </nav>
    </>
  );
}

export default Nav;
