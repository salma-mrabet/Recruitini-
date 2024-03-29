import React, { useState, useEffect } from "react";
import MainScreen from '../../components/MainScreen';
import { Form, Button, Row, Col ,Card} from "react-bootstrap";
import { Link } from "react-router-dom";
import './LoginPage.css';
import axios from "axios";
import { useLogin } from "../../hooks/useLogin";
import { useNavigate } from "react-router-dom";


export default function LoginPage() {
  // const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {login,  isLoading, error} = useLogin();
  const [role, setRole] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password, role);


  }

 


  return (
    <div className="login">
      <MainScreen title="LOGIN">
    


      <div className="loginContainer">
      <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
   
        <Form >
          <Form.Group controlId="formBasicemail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="Email"
              // value={email}
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicpassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="Password"
              // value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="on"
            />
          </Form.Group>


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

      <Button className="button" variant="dark" type="submit" disabled={isLoading} onClick={handleSubmit} >
            Login
          </Button>
          {error && <div className="error">{error}</div>}
        </Form>
        <Row className="py-3">
          <Col>
            New Customer ? <Link to="/signup">Register Here</Link>
          </Col>
        </Row>
   
        </Card.Body>
      </Card>
      </div>
      </MainScreen>
    </div>
  )
}

