import React from 'react'
import { Link } from 'react-router-dom'

function RowDetails({ jobtitle,company,jobdescription,joblocation, skills}) {
  
 
  return (
    <tr>
  
    <th>{jobtitle}</th>
    <th>{company}</th>
    <th>{jobdescription}</th>
    <th>{joblocation} </th>
    <th>{skills}</th>
    
    
    <td className="gap__actions">
     

     {/* boutton modifier */}
     <span className="badge bg-info">
      <Link to={`/updateoffer`} className="text-white"><i className="fas fa-edit"></i>
      </Link>
      </span>
     
     {/* boutton supprimer */}
      <span className="badge bg-danger" ><i
        className="fas fa-trash-alt"
      ></i></span>
    </td>
  </tr>
  
  )
}

export default RowDetails