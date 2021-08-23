import { Link } from "react-router-dom";
import "./Nav.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { FaSortDown } from "@fortawesome/react-fontawesome";

function Nav(props) {
  return (
    <>
      <nav className="dropdown">
        <h1>Fitness-App</h1>
        {/* <FontAwesomeIcon icon={FaSortDown} /> */}
        <p>dropdown here</p>
        <div class="dropdown-content">
          <Link to="/">Home</Link>
          <Link to="/history">History</Link>
        </div>
      </nav>
    </>
  );
}

export default Nav;
