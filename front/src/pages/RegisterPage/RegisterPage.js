import React, { useState} from "react";
import { Form, Button, Row, Col ,Card} from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import "./RegisterPage.css";
import { useSignup } from "../../hooks/useSignup";
import { useNavigate } from "react-router-dom";





function RegisterPage({ history }) {
  // const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmpassword, setConfirmPassword] = useState("");
 
  const [role, setRole] = useState('');
  const {signup,  isLoading,error} = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(firstname,lastname,age,email, password, role);
 

  }



  return (
    <MainScreen title="REGISTER">
      <div className="loginContainer">
      <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <Form >
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="name"
              // value={firstname}
              placeholder="Enter firstname"
              onChange={(e) => setFirstname(e.target.value)}
            />
          </Form.Group>

          <Form.Group >
            <Form.Label>LastName</Form.Label>
            <Form.Control
              type="name"
              // value={lastname}
              placeholder="Enter lastname"
              onChange={(e) => setLastname(e.target.value)}
            />
          </Form.Group>
          <Form.Group >
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="name"
              // value={age}
              placeholder="Enter Age"
              onChange={(e) => setAge(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              // value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              // value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          {/* <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              // value={confirmpassword}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group> */}
          <fieldset>
        <Form.Group as={Row} className="mb-3">
          <Form.Label as="legend" column sm={2}>
          I am:
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="Looking for a job"
              name="formHorizontalRadios"
              onChange={()=>{setRole("Employee")}}
              id="An Employee"
            />
            <Form.Check
              type="radio"
              label="A Recruiter"
              name="formHorizontalRadios"
              onChange={()=>{setRole("Recruiter")}}
              id="A Recruiter"
            />
          
          </Col>
        </Form.Group>
      </fieldset>
     

          <Button variant="primary" className="button" type="submit" disabled={isLoading}  onClick={handleSubmit}>
            Register
          </Button>
          {error && <div className="error">{error}</div>}
        </Form>
        <Row className="py-3">
          <Col>
            Have an Account ? <Link to="/login">Login</Link>
          </Col>
        </Row>
        </Card.Body>
      </Card>
      </div>
    
     
    </MainScreen>
  );
}

export default RegisterPage;