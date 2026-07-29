//sbse phle hm ek file banayenge src naam jisme ek file rhegi 'app.js' jaha ham server create krnge aur server.js file hai root me uska kaam rhega server ko start krna

// app.js    => creates the server.
// server.js => starts the server.

const express = require('express');




const app = express();

app.use(express.json())//ye hmne ek middleware banaya hai jo postman se body me  anae wale data ko read krta hai


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
    
notes.push(req.body);//yaha pr  jo data body se aya hai usko push krdiye notes array me yani frontend se jo request ayi hai, req.from frontend = data

res.status(201).json({
    messege:"note created sucessfully"
})//mtlb succes hogya kaam hahahaha aur ek msg send krdiye , aur ye postman ko response bhejega ye msg

    console.log(req.body) //req.body me data ayega mtlb body se jo bhi data send hoga wo console me print oga

})




// AB HAM EK API BANAYENGE JISKI MDDD SE USER NE JITNE BHI NOTES BANAYEW HONGE WO UN SBHI KO EK SATH DEKH SKEGA

//yani server se front end me data dikhega 












module.exports = app
/** yaha se ab server ko export krenge */