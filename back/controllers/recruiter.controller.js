const recruiter = require ("../models/recruiterModel");
const ValidateRecruiter = require('../validation/recruiter.validation');


const AddRecruiter = async (req,res) => {
    const { errors, isValid } = ValidateRecruiter(req.body);
    try{
        if(!isValid){
            res.status(404).json(errors);
        }else{
            await recruiter.findOne({Email:req.body.Email})
            .then(async (exist) =>{
                if(exist){
                    errors.Email= "Email already used";
                    res.status(404).json(errors);
                }else{
                    console.log(req.body);
                    await recruiter.create(req.body);
                    res.status(201).json({message : "Added with success"});
        

                }
            });
           
        }

    }catch(error){
        console.log(error.message)
    }
  
}

const FindAllRecruiters = async (req,res) => {
    try{
        const data = await recruiter.find();
        res.status(201).json(data)
    }catch(error){
        console.log(error.message)
    }
}

const FindSingleRecruiter = async (req,res) => {
    try{
        const data = await recruiter.findOne({_id: req.user});
        res.status(201).json(data)
    }catch(error){
        console.log(error.message)
    }
}

const UpdateRecruiter = async (req,res) => {
    const { firstname,
        lastname,
        age,
        phone,
        company,
        position,
        description} = req.body;
        console.log("test")
    
    try{
        if(!firstname || !lastname || !age || !phone || !company || !position || !description ){
            throw Error("Please add all the fields");
       }else{
       
        const data = await recruiter.findOneAndUpdate(
            {_id: req.user},
            req.body,
            {new:true}
            );
        res.status(201).json(data)
       }
    }catch(error){
        console.log(error.message)
    }
}

const DeleteRecruiter = async (req,res) => {
    try{
        const data = await recruiter.deleteOne({_id: req.user});
        res.status(201).json({message: "recruiter deleted"})
    }catch(error){
        console.log(error.message)
    }
}

module.exports = {
    AddRecruiter,
    FindAllRecruiters,
    FindSingleRecruiter,
    UpdateRecruiter,
    DeleteRecruiter
}