import React, { useState, useEffect } from "react";

import { useAuthContext } from "../../hooks/useAuthContext";
import RowDetails from "./RowDetails";

function Candidats() {

  const [candidats, setCandidats] = useState([]);


  const { user } = useAuthContext();

  //only works the first time
  useEffect(() => {
    if(user){
    console.log(user.token)
    fetch(`http://localhost:3700/api/employee`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
        Role: `${user.role}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCandidats(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }, [user]);

  return (
    <div>
      <>
        <div
          className="card input-filed"
          style={{
            margin: "20vh auto",
            maxWidth: "1000px",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <table className="striped table-hover">
            <thead style={{ height: "60px" }} > 
              <tr  >
                <th scope="col" >FirstName</th>
                <th scope="col">LastName</th>
                <th scope="col">Email</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Linkedin</th>
                <th scope="col">University</th>
                <th scope="col">Resume</th>
              </tr>
            </thead>
            <tr style={{border:" 1px solid black"}}></tr>
            <tbody>
              {candidats.map(
                ({
                  firstname,
                  lastname,
                  email,
                  phone,
                  linkedin,
                  university,
                  cvlink,
                }) => (
                  <RowDetails
                    firstname={firstname}
                    lastname={lastname}
                    email={email}
                    phone={phone}
                    linkedin={linkedin}
                    university={university}
                    cvlink={cvlink}
                  />
                )
              )}
            </tbody>
          </table>
        </div>
      </>
    </div>
  );
}

export default Candidats;
