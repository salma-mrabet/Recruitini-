
import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import { useAuthContext } from "../../hooks/useAuthContext"

const EmployeePage = ()=>{
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")
    const [activite,setActivite] = useState("")
    const [coursID,setcoursID] = useState("63ea8f4ad56e9cdb6decfb63")
    const [valide,setValide] = useState("")
    const [error,setError] = useState("")

    const {user} = useAuthContext()

    

    // const activityupload = (url) => {
    //     console.log("wilyeyy")
    //     if(url && coursID){
    //         fetch("/api/activity/create",{
    //             method:"post",
    //             headers:{
    //                 "Content-Type":"application/json",
    //                 "Authorization": `Bearer ${user.token}`
    //             },
    //             body:JSON.stringify({
    //                 role:user.role,
    //                 title,
    //                 body,
    //                 activ:url,
    //                 coursID:coursID
    //             })
    //         }).then(res=>res.json())
    //         .then(()=>{
    //             setValide("true")
    //             setTimeout(()=>{setValide("")}
    //             , 2000)
    //         })
    //         .catch(err=>{
    //             console.log(err)
    //         })
    //     }
    // }

        


    //    if(title && body && activite){
    //     e.preventDefault()
    //     const data = new FormData()
    //     data.append("file",activite)
    //     data.append("upload_preset","pcd_2023")
    //     data.append("cloud_name","dyizrug8d")
    //     fetch("https://api.cloudinary.com/v1_1/dyizrug8d/auto/upload",{
    //         method:"post",
    //         body:data
    //     })
    //     .then(res=>res.json())
    //     .then(data=>activityupload(data.url))
    //     .catch(err=>{
    //         console.log(err)
    //     })
    //    }else{
    //     setError("Please add all the fields")
    //     setTimeout(()=>{setError("")}
    //     , 2000)
    //     throw Error("Please add all the fields")
    //    }
   
 

   return(
       <div className="card input-filed"
       style={{
           margin:"20vh auto",
           maxWidth:"500px",
           padding:"20px",
           textAlign:"center"
       }}
       >
           <input 
           type="text"
            placeholder="Title"
           
            onChange={(e)=>setTitle(e.target.value)}
            />
           <input
            type="text"
             placeholder="Description"
           
            onChange={(e)=>setBody(e.target.value)}
             />

           <div className="file-field input-field">
            <div className="btn #64b5f6 blue darken-1">
                <span>Upload CV</span>
                <input type="file" />
            </div>
            </div>

            <Button variant="outline-dark" >Submit Resume </Button>

       </div>
   )
}

export default EmployeePage 