import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useAuthContext } from "../../hooks/useAuthContext";
import RowDetails from "./RowDetails";
import "./form.css";

const RecruiterPage=() =>{
  const [jobtitle, setJobtitle] = useState("");
  const [company, setCompany] = useState("");
  const [jobdescription, setJobdescription] = useState("");
  const [joblocation, setJoblocation] = useState("");
  const [skills, setSkills] = useState("");
  const [element, setElement] = useState("");
  const [jobs, setJobs] = useState([]);

  const [valide, setValide] = useState("");
  const [error, setError] = useState("");

  const { user } = useAuthContext();

  const OnDelete = (_id) => {
    console.log(_id);
    try {
      fetch(
        `http://localhost:3700/api/job/jobofferdelete?id=${_id.toString()}`,
        {
          method: "delete",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
            Role: `${user.role}`,
          },
        }
      );
      // remove the deleted job offer from the state
      setJobs(jobs.filter((jobOffer) => jobOffer._id !== _id));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch(`http://localhost:3700/api/job/joboffers?email=${user.email}`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
        Role: `${user.role}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = async (e) => {
    console.log("test");
    e.preventDefault();
    if (user) {
      await fetch("http://localhost:3700/api/job/joboffer", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
          Role: `${user.role}`,
        },
        body: JSON.stringify({
          jobtitle,
          company,
          jobdescription,
          joblocation,
          skills,
          recruiter: user.email,
        }),
      })
        .then((res) => res.json())

        .then((data) => {
          console.log(data);
          setJobs([...jobs, data]);
          setValide("true");
          setTimeout(() => {
            setValide("");
          }, 2000);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setError("Please add all the fields");
      setTimeout(() => {
        setError("");
      }, 2000);
      throw Error("Please add all the fields");
    }
  };

  return (
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

              <th scope="col">job location </th>
            </tr>
          </thead>
          <tbody>
            {jobs.map(
              ({
                jobtitle,
                jobdescription,
                skills,
                company,
                joblocation,
                _id,
              }) => (
                <RowDetails
                  
                  jobtitle={jobtitle}
                  jobdescription={jobdescription}
                  skills={skills}
                  company={company}
                  joblocation={joblocation}
                  _id={_id}
                  OnDelete={OnDelete}
                />
              )
            )}
          </tbody>
        </table>
        <input
          type="text"
          placeholder="Title"
          value={jobtitle}
          onChange={(e) => setJobtitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <input
          type="text"
          placeholder="Description"
          value={jobdescription}
          onChange={(e) => setJobdescription(e.target.value)}
        />

        <input
          type="text"
          placeholder="Location"
          value={joblocation}
          onChange={(e) => setJoblocation(e.target.value)}
        />

        <input
          type="text"
          placeholder="Skills / requirements "
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />

        <Button variant="outline-dark" onClick={handleSubmit}>
          Add offer
        </Button>
        {(valide && <div className="valide">Job uploaded</div>) ||
          (error && <div className="error">{error}</div>)}
      </div>
    </>
  );
}

export default RecruiterPage;
