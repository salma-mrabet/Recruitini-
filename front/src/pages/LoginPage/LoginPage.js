import React, { useState, useEffect } from "react";
import MainScreen from '../../components/MainScreen';
import { Form, Button, Row, Col } from "react-bootstrap";
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

    // if(!error){
    //   if(role == "Employee"){
    //     navigate("/employee")

    //   }else if (role =="Recruiter"){
    //     navigate("/Recruiter")


    //   }
    // }
  }

  // const submitHandler = async (e) => {
  //   e.preventDefault();
  //   try{
  //     const config = {
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //     };
  //     setLoading(true);

  //     const {data} = await axios.post(
  //       "http://localhost:3700/api/login",
  //       {
  //         email,
  //         password,
  //       },
  //       config
  //       ) ;

  //       console.log(data);
  //       localStorage.setItem('employeeInfo', JSON.stringify(data));
  //       setLoading(false);
  //   }catch(error){
     

  //   }
  // };

  return (
    <div>
      <MainScreen title="LOGIN">


      <div className="loginContainer">
   
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
              label="An Employee"
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

      <Button variant="primary" type="submit" disabled={isLoading} onClick={handleSubmit} >
            Submit
          </Button>
          {error && <div className="error">{error}</div>}
        </Form>
        <Row className="py-3">
          <Col>
            New Customer ? <Link to="/signup">Register Here</Link>
          </Col>
        </Row>
   

      </div>
      </MainScreen>
    </div>
  )
}

