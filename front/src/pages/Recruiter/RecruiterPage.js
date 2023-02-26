import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import { useAuthContext } from "../../hooks/useAuthContext"

const RecruiterPage  = ()=>{
    const [jobtitle,setJobtitle] = useState("")
    const [company,setCompany] = useState("")
    const [jobdescription,setJobdescription] = useState("")
    const [joblocation,setJoblocation] = useState("")
    const [skills,setSkills] = useState("")

   
    const [valide,setValide] = useState("")
    const [error,setError] = useState("")

    const {user} = useAuthContext()

    

    const handleSubmit =async (e) => {
        console.log("test")
        e.preventDefault();
        if(user){
           await fetch("http://localhost:3700/api/job/joboffer",{
                method:"post",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization": `Bearer ${user.token}`
                },
                body:JSON.stringify({
                    role:user.role,
                    jobtitle,
                    company,
                    jobdescription,
                    joblocation,
                    skills
                })
            }).then(res=>res.json())
          
            .then(()=>{
                setValide("true")
                setTimeout(()=>{setValide("")}
                , 2000)
            })
            .catch(err=>{
                console.log(err)
            })
          }else{
            setError("Please add all the fields")
            setTimeout(()=>{setError("")}
            , 2000)
            throw Error("Please add all the fields")
           }
    }

        

 

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
            value={jobtitle}
            onChange={(e)=>setJobtitle(e.target.value)}
            />
           <input
            type="text"
             placeholder="Company"
             value={company}
            onChange={(e)=>setCompany(e.target.value)}
             />

<input
            type="text"
             placeholder="Description"
             value={jobdescription}
            onChange={(e)=>setJobdescription(e.target.value)}
             />

<input
            type="text"
             placeholder="Location"
             value={joblocation}
            onChange={(e)=>setJoblocation(e.target.value)}
             />

<input
            type="text"
             placeholder="Skills / requirements "
             value={skills}
            onChange={(e)=>setSkills(e.target.value)}
             />


            <Button variant="outline-dark" onClick={handleSubmit}>Add offer</Button>
            {(valide && <div className="valide">Job uploaded</div>) || (error && <div className="error">{error}</div>)}
       </div>
   )
}

export default RecruiterPage 