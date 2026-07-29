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

const notes = []
app.post('/notes', (req, res) => {//api ka naam hai /notes aur post metohd ki api hai 

    notes.push(req.body);//yaha pr  jo data body se aya hai usko push krdiye notes array me yani frontend se jo request ayi hai, req.from frontend = data

    res.status(201).json({
        messege: "note created sucessfully"
    })//mtlb succes hogya kaam hahahaha aur ek msg send krdiye , aur ye postman ko response bhejega ye msg

    console.log(req.body) //req.body me data ayega mtlb body se jo bhi data send hoga wo console me print oga

})




// AB HAM EK API BANAYENGE JISKI MDDD SE USER NE JITNE BHI NOTES BANAYEW HONGE WO UN SBHI KO EK SATH DEKH SKEGA

//yani server se front end me data dikhega 

app.get('/notes', (req, res) => {//data server se fntend pe jarha hai get method k zariya

    res.status(200).json({
        messege: "all notes feched sucessfully",
        notes: notes
    })

})

//ab kya hoga ab h postman pe jayenge aur waha se phle post methoduse krenge data send krenge server pe  fir data server pe ane k baad dobara post man pe jayenghe aur fir get method krke server se data fetch krenge tb ye work krega aur sare notes show honge



/* ab ham DELETE metohd use krenge kisi bhi node ko delete krne keliye  
ab hme jis node ko delete krn hai wha hm /notes/index , index ki jo value denge wo note dlt hojayega
delete(/notes/1,2,3,4,5 etc
*/
app.delete('/notes/:index', (req, res) => {
    const index=req.params.index //is index pr kya value ayi wo hm req.params.index se pta krenge

    delete notes[index]//yaha pe jo notes ka index milega wo delt hojayega

    res.status(200).json({
        messege:"not deleted sucessfully"
    })

})





module.exports = app
/** yaha se ab server ko export krenge */