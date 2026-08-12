const mongoose = require ('mongoose')
require("dotenv").config();

async function connectdb(){

try{
    await mongoose.connect(process.env.MONGO_URI)
}catch(err){
    console.log("DATABASE CONNECTION ERROR",err)
}


}

module.exports =connectdb