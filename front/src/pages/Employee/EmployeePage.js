
import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import { useAuthContext } from "../../hooks/useAuthContext";



const EmployeePage = ()=>{
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")
    const [cv,setCv] = useState("")

    const [valide,setValide] = useState("")
    const [error,setError] = useState("")

    const {user} = useAuthContext()
    

    
    const Cvupload = (url) => {
       
        
        if(url){
           
            fetch("http://localhost:3700/api/profile",{
                method:"post",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization": `Bearer ${user.token}`,
                    'Role':`${user.role}`}
                ,
                body:JSON.stringify({
                    role:user.role,
                    title,
                    body,
                    cv:url
                    
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
            throw Error("url is missing")
        }
    }

        
    const CvDetails = (e)=>{
        if(title && body ){
         e.preventDefault()
         const data = new FormData()
         data.append("file",cv)
         data.append("upload_preset","testcv")
         data.append("cloud_name","djnku58sy")
         fetch("https://api.cloudinary.com/v1_1/djnku58sy/auto/upload",{
             method:"post",
             body:data
         })
         .then(res=>res.json())
         .then(data=>{
            Cvupload(data.url)
            console.log(data)
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
     const reload=()=>window.location.reload();


   
 

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
                <input type="file" onChange={(e)=>setCv(e.target.files[0])}/>
            </div>
            </div>

            <Button variant="outline-dark"  onClick={CvDetails} >Submit  </Button>
            {(valide && <div className="valide">Resume uploaded</div>) || (error && <div className="error">{error}</div>)}




            

       </div>
       
   )
}

export default EmployeePage 