import React from "react";
import { Link } from "react-router-dom";

function RowDetails({
  jobtitle,
  jobdescription,
  skills,
  company,
  joblocation,
  recruiter,
}) {
  return (
    <tr>
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
