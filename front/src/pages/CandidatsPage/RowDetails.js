import React from "react";
import { Link } from "react-router-dom";

function RowDetails({
    firstname,
    lastname,
    email,
    phone,
    linkedin,
    university,
    cvlink,
}) {
  return (
    <tr>
      <th>{firstname}</th>
      <th>{lastname}</th>
      <th>{email}</th>
      <th>{phone}</th>
     
      <th>{linkedin} </th>
   
      <th>{university}</th>
      <th>{cvlink}</th>

      
    </tr>
  );
}

export default RowDetails;