import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

function RowDetails({ jobtitle,company, id, OnDelete }) {
  
 
  return (
    <tr>
    <th>{jobtitle}</th>
    <th>{company}</th>

   
    
    <td className="gap__actions">
     


     
     {/* boutton supprimer */}
      <span className="badge bg-danger" onClick={()=>OnDelete(id)}><i
        className="fas fa-trash-alt"
      ></i></span>
    </td>
  </tr>
  )
}

export default RowDetails