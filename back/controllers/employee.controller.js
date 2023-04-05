const employee = require ("../models/employeeModel");
const ValidateEmployee = require('../validation/employee.validation');



const AddEmployee = async (req,res) => {
    const { errors, isValid } = ValidateEmployee(req.body);
    try{
        if(!isValid){
            res.status(404).json(errors);
        }else{
            await employee.findOne({Email:req.body.Email})
            .then(async (exist) =>{
                if(exist){
                    errors.Email= "Email already used";
                    res.status(404).json(errors);
                }else{
                    console.log(req.body);
                    await employee.create(req.body);
                    res.status(201).json({message : "Added with success"});
        

                }
            });
           
        }

    }catch(error){
        console.log(error.message)
    }
  
}

const FindAllEmployees = async (req,res) => {
    try{
        const data = await employee.find();
        res.status(201).json(data)
    }catch(error){
        console.log(error.message)
    }
}

const FindSingleEmployee = async (req,res) => {
    try{
        const data = await employee.findOne({_id: req.user});
        res.status(201).json(data)
    }catch(error){
        console.log(error.message)
    }
}

const UpdateEmployee = async (req,res) => {
    const { firstname,
        lastname,
        age,
        phone,
        linkedin,
        university} = req.body;

    try{
        if(!firstname || !lastname || !age || !phone || !university || !linkedin ){
             throw Error("Please add all the fields");
        }else{
        const data = await employee.findOneAndUpdate(
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
const UpdateCv = async (req,res) => {
    const { cv} = req.body;

    try{
       
        const data = await employee.findOneAndUpdate(
            {_id: req.user},
            req.body,
            {new:true}
            );
        res.status(201).json(data)
        
    }catch(error){
        console.log(error.message)
    }
}

const DeleteEmployee = async (req,res) => {
    try{
        const data = await employee.deleteOne({_id: req.params.id});
        res.status(201).json({message: "client deleted"})
    }catch(error){
        console.log(error.message)
    }
}

// const AuthEmployee = async (req,res) => {
//     const {Email, Password } =req.body; 

//     const user = await employee.findOne({Email});
//     if (user && (await user.matchPassword(Password))){
//         res.json({message: "matching password"})
//     }else {
//         res.status(400);
//         res.json({message: "invalid email or password"});
//         // throw new Error("invalid email or password");
       
//     }

// }

module.exports = {
    AddEmployee,
    FindAllEmployees,
    FindSingleEmployee,
    UpdateEmployee,
    DeleteEmployee,
    UpdateCv
}