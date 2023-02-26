const job = require ("../models/joboffers.model");



const AddJobOffer = async (req,res) => {

    try{
      
                    console.log(req.body);
                    await job.create(req.body);
                    res.status(201).json({message : "Added with success"});
        

        

    }catch(error){
        console.log(error.message)
    }
  
}

const FindAllJobOffers = async (req,res) => {
    try{
        const data = await job.find();
        res.status(201).json(data)
    }catch(error){
        console.log(error.message)
    }
}

const FindSingleJobOffer = async (req,res) => {
    try{
        const data = await job.findOne({_id: req.params.id});
        res.status(201).json(data)
    }catch(error){
        console.log(error.message)
    }
}

const UpdateJobOffer = async (req,res) => {
  
    try{
   
        const data = await job.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new:true}
            );
        res.status(201).json(data)
        
    }catch(error){
        console.log(error.message)
    }
}




const DeleteJobOffer = async (req,res) => {
    try{
        const data = await job.deleteOne({_id: req.params.id});
        res.status(201).json({message: "job deleted"})
    }catch(error){
        console.log(error.message)
    }
}



module.exports = {
    AddJobOffer,
    FindAllJobOffers,
    FindSingleJobOffer,
    UpdateJobOffer,
    DeleteJobOffer
}