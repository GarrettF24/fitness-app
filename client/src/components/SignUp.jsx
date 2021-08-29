import { Form, Button } from "react-bootstrap";
import "./SignUp.css";

function SignUp(props) {
  return (
    <>
      <div id="sign-up-title">
        <h1>Welcome! Please Login or Sign up!</h1>
      </div>
      <Form id="sign-up">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
       
    </>
  );
}

export default SignUp;
