const mongoose = require('mongoose');

/** data bse me data add krne se phle hm batayenge ki data kis format me save krna hai aur isi format ko ham "schema" kehte hain */
const noteschema = new mongoose.Schema({
    title: String,
    description: String
})


// agar data base me kuch bhi operation (c r u d) apply krna hai to uske lye hme note ka model use krna padega 
const notemodel= mongoose.model("note",noteschema);

//ab isko export krlenge
module.exports= notemodel;