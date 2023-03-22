const profile = require ("../models/profile");



const AddProfile = async (req,res) => {

    try{
      
                    console.log(req.body);
                    await profile.create(req.body);
                    res.status(201).json({message : "Added with success"});
        

        

    }catch(error){
        console.log(error.message)
    }
  
}

const FindAllProfiles = async (req,res) => {
    try{
        const data = await profile.find();
        res.status(201).json(data)
    }catch(error){
        console.log(error.message)
    }
}

const FindSingleProfile = async (req,res) => {
    try{
        const data = await profile.findOne({_id: req.params.id});
        res.status(201).json(data)
    }catch(error){
        console.log(error.message)
    }
}

const UpdateProfile = async (req,res) => {
  
    try{
   
        const data = await profile.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new:true}
            );
        res.status(201).json(data)
        
    }catch(error){
        console.log(error.message)
    }
}




const DeleteProfile = async (req,res) => {
    try{
        const data = await profile.deleteOne({_id: req.params.id});
        res.status(201).json({message: "profile deleted"})
    }catch(error){
        console.log(error.message)
    }
}



module.exports = {
    AddProfile,
    FindAllProfiles,
    FindSingleProfile,
    UpdateProfile,
    DeleteProfile
}