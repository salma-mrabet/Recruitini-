import React, { Fragment, useState, useEffect } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import "./Profile.css";
import MainScreen from "../../components/MainScreen";

export default function ProfileRecruiter() {
  const { user } = useAuthContext();
  const [element, setElement] = useState("");

  useEffect(() => {
    fetch("http://localhost:3700/api/recruiter", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
        Role: `${user.role}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        data.forEach((element) => {
          if (element.email === user.email) {
            setElement(element);
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="profiles">
      <div className="Profile">
        <MainScreen title="PROFILE">
          <div className="Container">
            <Card border="light" className="bg-white shadow-sm mb-4">
              <Card.Body>
                <Card className="mb-3 mt-3" style={{ padding: "20px" }}>
                  <Card.Body>
                    <Card.Title>
                      {element.firstname} {element.lastname}{" "}
                    </Card.Title>
                  </Card.Body>
                  <ListGroup variant="flush">
                    {/* <ListGroup.Item>
            <strong>Email:</strong>{element.email} 
          </ListGroup.Item> */}
                    <ListGroup.Item>
                      <strong>Age:</strong>
                      {element.age}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Phone Number:</strong> {element.phone}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Company Name :</strong> {element.company}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Occupied Position:</strong> {element.position}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>About The Company:</strong> {element.description}
                    </ListGroup.Item>
                  </ListGroup>
                  <Card.Footer>
                    <Button
                      variant="outline-dark"
                      href="/updateprofile"
                      style={{
                        width: "300px",
                        borderRadius: "5px",
                        margin: "20px",
                      }}
                    >
                      Edit
                    </Button>
                    <Button variant="outline-dark" href="/recruiter">
                      Submit A Job Offer
                    </Button>
                  </Card.Footer>
                </Card>
              </Card.Body>
            </Card>
          </div>
        </MainScreen>
      </div>
    </div>
  );
}
