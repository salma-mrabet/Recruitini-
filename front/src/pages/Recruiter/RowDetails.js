import React from 'react'
import { Link } from 'react-router-dom'

function RowDetails({ jobtitle,
  jobdescription,
  skills,
  company,
  joblocation,_id,OnDelete}) {
  
 
  return (
    <tr>
  
    <th>{jobtitle}</th>
    <th>{jobdescription}</th>
    <th>{skills}</th>
    <th>{company}</th>
    
    <th>{joblocation} </th>
    
    
    
    <td className="gap__actions">
     

     {/* boutton modifier */}
     <span className="badge bg-info">
      <Link to={`/updateoffer`} className="text-white"><i className="fas fa-edit"></i>
      </Link>
      </span>
     
     {/* boutton supprimer */}
      <span className="badge bg-danger" onClick={()=>OnDelete(_id)} ><i
        className="fas fa-trash-alt"
      ></i></span>
    </td>
  </tr>
  
  )
}

export default RowDetails