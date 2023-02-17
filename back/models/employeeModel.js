const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
// const bcrypt = require('bcryptjs');


const EmployeeSchema = new Schema ({
    firstname : {
      type: String,
      required: true,
      unique: true,
    },
    lastname :{
      type: String,
      required: true,
      unique: true,
    },
    age : {
      type: String,
      required: true,
      unique: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true
      }
   
  
   
},{timestamps: true });

// // crypting the password
// EmployeeSchema.pre("save", async function(next){
//     if(!this.isModified("Password")){
//         next();
//     }
// //  a salt is a random value that is generated and used to hash the password.
//     const salt = await bcrypt.genSalt(10); //the higher the value , the more secure the password is 
//     console.log(this.Password);
//     this.Password = await bcrypt.hash(this.Password , salt)
// });


// // to decrypt the password

// EmployeeSchema.methods.matchPassword= async function (enteredPassword){
//     return await bcrypt.compare(enteredPassword, this.Password);
// };






module.exports = mongoose.model('employee',EmployeeSchema)