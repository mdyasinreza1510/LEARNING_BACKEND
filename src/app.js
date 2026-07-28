//sbse phle hm ek file banayenge src naam jisme ek file rhegi 'app.js' jaha ham server create krnge aur server.js file hai root me uska kaam rhega server ko start krna

// app.js    => creates the server.
// server.js => starts the server.

const express = require('express');




const app = express();


/* ab practice keliy hm ek notes app banayenge jahan pe ek note obj. banayenge 

const notes={
    title:"note 1",
    description:"this is my first note"
 }
    abb user to multiple notes bana skta hai siiliye hm ek notes ka array banayenge 

    const notes =[
    {
     title:note 2",
    description:"this is my 2nd note"
    }

    {
     title:note 3",
    description:"this is my 3rd note"
    }
    ]

*/

// ab useer fnt.end se data send krenge title au description to server pr data snd krne keliye POST KA USE KRTE HAIN

const notes =[]
app.post('/notes',(req,res)=>{//api ka naam hai /notes aur post metohd ki api hai 
    
    console.log(req.body) //req.body me data ayega

})












module.exports = app
/** yaha se ab server ko export krenge */