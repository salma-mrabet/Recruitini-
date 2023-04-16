import React, { Fragment,  useState } from "react";

import ListGroup from "react-bootstrap/ListGroup";

import {
  Col,
  Row,
  Card,
  Form,
  Button,
  InputGroup,
} from "@themesberg/react-bootstrap";
import "./Forms.css";
import { useAuthContext } from "../hooks/useAuthContext";

export const InfoForm = () => {

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [description, setDescription] = useState("");
  const { user } = useAuthContext();

  const handleUpdate = () => {
    console.log("aa")
    console.log(user)
   
    fetch(`http://localhost:3700/api/recruiterupdate`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
        Role: `${user.role}`,
      },
      body: JSON.stringify({
        firstname,
        lastname,
        age,
        phone,
        company,
        position,
        description
       
      }),
   
    })
      .then((res) => res.json())
      .then((data) => {
       
        console.log(data);
        console.log("aa");
       
        setFirstname(data.firstname);
        setLastname(data.lastname);
        setAge(data.age);
        setPhone(data.Phone);
        setCompany(data.company);
        setPosition(data.position);
        setDescription(data.description);
       
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
  


    <div className="Container">
      <Card border="light" className="bg-white shadow-sm mb-4">
        <Card.Body>
          <h5 className="mb-4"> General information</h5>
          <Card className="mb-3 mt-3" style={{ padding: "20px" }}>
          <Form>
            <Row>
              <Col md={6} className="mb-3">
                <Form.Group id="firstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                   
                    type="text"
                    placeholder="Enter your first name"
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col md={6} className="mb-3">
                <Form.Group id="lastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                   
                    type="text"
                    placeholder="Also your last name"
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="align-items-center">
              <Col md={6} className="mb-3">
                <Form.Group id="birthday">
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                   placeholder="age" 
                   onChange={(e) => setAge(e.target.value)}
                  
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
            
              <Col md={6} className="mb-3">
                <Form.Group id="phone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    
                    type="number"
                    placeholder=" 22 678 910"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>

            <h5 className="my-4">.</h5>
            <Row>
              <Col sm={9} className="mb-3">
                <Form.Group id="address">
                  <Form.Label>Company name</Form.Label>
                  <Form.Control
               
                    type="text"
                    placeholder="Company"
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col sm={3} className="mb-3">
              <Form.Group id="address">
                  <Form.Label>Occupied Position</Form.Label>
                  <Form.Control
               
                    type="text"
                    placeholder="Post"
                    onChange={(e) => setPosition(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              {/* could add required to form.control  */}
              <Col  className="mb-3">
                <Form.Group id="city">
                  <Form.Label>About The Company</Form.Label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"  placeholder="Description"   onChange={(e) => setDescription(e.target.value)}></textarea>
                </Form.Group>
                
              </Col>
           
           
            </Row>
            <Row>
              <div className="mt-3">
         
                <Button variant="outline-primary"    onClick={handleUpdate}>
                  Save All
                </Button>
               
              </div>

              <div className="mt-3">
             
              
               
              </div>
            </Row>
          </Form>
          </Card>
        </Card.Body>
      </Card>
    </div>
    </div>
  );
};