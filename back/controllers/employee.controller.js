const employee = require ("../models/employee.model");
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
        const data = await employee.findOne({_id: req.params.id});
        res.status(201).json(data)
    }catch(error){
        console.log(error.message)
    }
}

const UpdateEmployee = async (req,res) => {
    const { errors, isValid } = ValidateEmployee(req.body);
    try{
        if(!isValid){
            res.status(404).json(errors);
        }else{
        const data = await employee.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new:true}
            );
        res.status(201).json(data)
        }
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

module.exports = {
    AddEmployee,
    FindAllEmployees,
    FindSingleEmployee,
    UpdateEmployee,
    DeleteEmployee
}