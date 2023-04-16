import React from "react";
import { Link } from "react-router-dom";

function RowDetails({
  _id,
  jobtitle,
  jobdescription,
  skills,
  company,
  joblocation,
  recruiter,
}) {
  return (
    <tr key={_id} id={_id}>
      <th>{jobtitle}</th>
      <th>{jobdescription}</th>
      <th>{skills}</th>
      <th>{company}</th>
     
      <th>{joblocation} </th>
   
      <th>{recruiter}</th>

      
    </tr>
  );
}

export default RowDetails;
