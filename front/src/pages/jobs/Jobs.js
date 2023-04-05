import React, { useState, useEffect } from "react";

import { useAuthContext } from "../../hooks/useAuthContext";
import RowDetails from "./RowDetails";

function Jobs() {

  const [joboffers, setJoboffers] = useState([]);


  const { user } = useAuthContext();

//   useEffect(() => {
//     console.log(user.token)
//     fetch(`http://localhost:3700/api/job/joboffersall`, {
//       method: "get",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${user.token}`,
//         Role: `${user.role}`,
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setJoboffers(data);
//         console.log(data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

  return (
    <div>
      <>
        <div
          className="card input-filed"
          style={{
            margin: "20vh auto",
            maxWidth: "500px",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <table className="striped">
            <thead>
              <tr>
                <th scope="col">Job title</th>
                <th scope="col">job description</th>
                <th scope="col">Skills requiered</th>
                <th scope="col">Company</th>
                <th scope="col">Location</th>
                <th scope="col">Contact Recruiter</th>
              </tr>
            </thead>
            <tbody>
              {joboffers.map(
                ({
                  jobtitle,
                  jobdescription,
                  skills,
                  company,
                  joblocation,
                  recruiter,
                }) => (
                  <RowDetails
                    jobtitle={jobtitle}
                    jobdescription={jobdescription}
                    skills={skills}
                    company={company}
                    joblocation={joblocation}
                    recruiter={recruiter}
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

export default Jobs;

