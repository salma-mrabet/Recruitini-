import React, { useState, useEffect } from "react";

import { useAuthContext } from "../../hooks/useAuthContext";
import RowDetails from "./RowDetails";
import "./jobs.css";
import MainScreen from "../../components/MainScreen";

function Jobs() {

  const [joboffers, setJoboffers] = useState([]);
  const [query,setQuery] = useState("")

  const { user } = useAuthContext();

 
  useEffect(() => {
    if(user){
    console.log(user)
    fetch(`http://localhost:3700/api/job/joboffersall`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
        Role: `${user.role}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setJoboffers(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }, [user]);

  const search = (data) => {
    return data.filter(item => 
      item.jobtitle.toLowerCase().includes(query) ||
      item.jobdescription.toLowerCase().includes(query) ||
      item.skills.toLowerCase().includes(query) ||
      item.company.toLowerCase().includes(query) ||
      item.joblocation.toLowerCase().includes(query) ||
      item.recruiter.toLowerCase().includes(query)  ) ;
    };

    

  return (
    <div className="jobs">
     
    <MainScreen >
    
   
        <div
          className="card input-filed"
          style={{
            margin: "10vh auto",
            maxWidth: "900px",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <div className="" style={{marginBottom:"40px", alignItems:"left"}}>
            <h4>Search for a specific Offer:</h4>
          <input 
          type="text"
           placeholder="Search..." 
           className="search" 
           onChange={(e) => setQuery(e.target.value)}
           />
           </div>

          <table className="striped  table-hover" >
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
               {search(joboffers).map(
                ({
                  _id,
                  jobtitle,
                  jobdescription,
                  skills,
                  company,
                  joblocation,
                  recruiter,
                }) => (
                  <RowDetails
                  _id={_id}
 
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
    
     
 
     
    </MainScreen>
    </div>
  );
}

export default Jobs;

