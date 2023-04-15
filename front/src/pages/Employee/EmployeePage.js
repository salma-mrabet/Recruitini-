import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useAuthContext } from "../../hooks/useAuthContext";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const EmployeePage = () => {
  const [cv, setCv] = useState("");

  const [valide, setValide] = useState("");
  const [error, setError] = useState("");
  const [recommend, setRecommend] = useState("");

  const { user } = useAuthContext();

  const CvUpdate = (url) => {
    fetch(`http://localhost:3700/api/employeupdatecv`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
        Role: `${user.role}`,
      },
      body: JSON.stringify({
        cvlink: url,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log("aa");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const Cvupload = (url) => {
    console.log(url);

    if (url) {
      fetch("http://localhost:3700/api/profile", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
          Role: `${user.role}`,
        },
        body: JSON.stringify({
          role: user.role,

          cv: url,
        }),
      })
        .then((res) => res.json())
        .then(() => {
          CvUpdate(url);
          setValide("true");
          setRecommend("true");
          setTimeout(() => {
            setValide("");
          }, 2000);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      throw Error("url is missing");
    }
  };

  const CvDetails = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", cv);
    data.append("upload_preset", "testcv");
    data.append("cloud_name", "djnku58sy");
    fetch("https://api.cloudinary.com/v1_1/djnku58sy/auto/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        Cvupload(data.url);
        console.log(data.url);
        console.log(data);
        setCv(data.url.toString());
        console.log(data.url);
        console.log(cv);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      className="card input-filed"
      style={{
        margin: "20vh auto",
        maxWidth: "500px",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <div className="file-field input-field">
        <div className="btn #64b5f6 blue darken-1">
          <span>Upload CV</span>
          <input type="file" onChange={(e) => setCv(e.target.files[0])} />
        </div>
      </div>

      <Button variant="outline-dark" onClick={CvDetails}>
        Submit{" "}
      </Button>
      {(valide && <div className="valide">Resume uploaded</div>) ||
        (error && <div className="error">{error}</div>)}
      {recommend && (
        <Button className="outline-dark" href="/recommendation">
          {" "}
          Get recommendations{" "}
        </Button>
      )}
      <br></br>

      {/* <h4>View PDF</h4> */}

      {/* {cv && <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">

<div
    
>
    <Viewer fileUrl={cv} 
      />
</div>

</Worker>} */}
    </div>
  );
};

export default EmployeePage;
