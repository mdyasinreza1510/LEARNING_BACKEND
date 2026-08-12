const mongoose = require ('mongoose')
require("dotenv").config();

async function connectdb(){

await mongoose.connect(process.env.MONGODB_URI);

console.log("CONNECTED TO DATABASE")
}

module.exports =connectdb