/**mongoose ko require krenge database se connect krenge  */

//db.js me hm sirf  logic likhte hain ki ki trha se server ko connect krnge database se 
require("dotenv").config();

const mongoose =require('mongoose');

async function connectdb(){
 await mongoose.connect(process.env.MONGO_URI);



// YAHA HMNE PROCESS .EN JO USE KIYA HAI WO ENV ME JO DATA HMNE HIDE KIYA USKE LIE HAI 

//awit ka mtlb jb tk mongose server ko connect nhi krdeta hm wait krnge.

//aur jaise hi ye connect hojayegihm krenge 
console.log("connected to DATA BASE")
}

module.exports= connectdb

