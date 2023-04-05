import React, { Fragment,  useState,useEffect } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "./Profile.css";


export default function ProfileEmployee() {

    const { user } = useAuthContext();
    const [element, setElement] = useState("");

    useEffect(() => {
        fetch('http://localhost:3700/api/employee', {
          method: "get",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
            Role: `${user.role}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
        
         data.forEach(element => {
            if (element.email === user.email) {
                setElement(element);
              }
            
         });
           
        
          })
          .catch((err) => {
            console.log(err);
          });
      },[]);
    
      
  return (
  


    <div>
                       


         <div className="Container"  >
         <h2 className="profile"  >Profile</h2>
      <Card border="light" className="bg-white shadow-sm mb-4">
        <Card.Body>
      <Card className="mb-3 mt-3" style={{ padding: "20px" }}>
        <Card.Body>
          <Card.Title>{element.firstname} {element.lastname} </Card.Title>
        </Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <strong>Age:</strong> {element.age}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Phone Number:</strong> {element.phone}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Linkedin :</strong> {element.linkedin}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>University:</strong> {element.university}
          </ListGroup.Item>
        
        </ListGroup>
        <Card.Footer>
        <Button variant="outline-primary" href="/updateprofile" style={{  width : "300px",borderRadius: "5px", margin: "20px" }}>
  Edit
</Button>

         
        </Card.Footer>
      </Card>

    
      </Card.Body>
      </Card>
    </div>
  </div>
 
   
  )
    }
