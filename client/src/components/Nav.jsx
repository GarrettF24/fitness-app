import { Link } from "react-router-dom";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

function Nav(props) {
  return (
    <>
      <nav className="dropdown">
        <h1>Fitness-App</h1>
        <div className="test">
          <FontAwesomeIcon icon={faCaretDown} />
          <div className="dropdown-content">
            <Link to="/">Home</Link>
            <Link to="/history">History</Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
