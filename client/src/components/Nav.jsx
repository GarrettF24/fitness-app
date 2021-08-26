import { Link } from "react-router-dom";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";

function Nav(props) {
  return (
    <>
      {/* <Dropdown>
        <Dropdown.Toggle
          variant="success"
          id="dropdown-basic"
        ></Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item>
            <Link to="/">Home</Link>
          </Dropdown.Item>
          <Dropdown.Item>
            {" "}
            <Link to="/history">History</Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> */}
      <nav className="dropdown">
        <Link to="/signup">
          <Button id="sign-in" variant="dark">
            Sign-in
          </Button>{" "}
        </Link>
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
