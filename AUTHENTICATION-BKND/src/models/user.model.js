 const mongoose = require('mongoose')



 const userschema= new mongoose.Schema({
    username: String,

    //yaha hmne smail ka type aur unique describe kya hai jisse koi bhi user same email se register na kr ske
    email:{
      type: String,
      unique: true
    },
    
    password:String

 })

 const usermodel = mongoose.model("user",userschema)

 module.exports = usermodel