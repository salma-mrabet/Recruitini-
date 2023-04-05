const mongoose = require ('mongoose');
const Schema = mongoose.Schema;



const profileSchema = new Schema ({
 
    cv: {
        type: String,
        
  
      },
    
  

 
  
   
},{timestamps: true })






module.exports = mongoose.model('profile',profileSchema)