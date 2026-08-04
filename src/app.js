//sbse phle hm ek file banayenge src naam jisme ek file rhegi 'app.js' jaha ham server create krnge aur server.js file hai root me uska kaam rhega server ko start krna

// app.js    => creates the server.
// server.js => starts the server.

const express = require('express');

//note model ko require krenge
const notemodel= require('./models/note.model')




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

// const notes = []
// app.post('/notes', (req, res) => {//api ka naam hai /notes aur post metohd ki api hai 

//     notes.push(req.body);//yaha pr  jo data body se aya hai usko push krdiye notes array me yani frontend se jo request ayi hai, req.from frontend = data

//     res.status(201).json({
//         messege: "note created sucessfully"
//     })//mtlb succes hogya kaam hahahaha aur ek msg send krdiye , aur ye postman ko response bhejega ye msg

//     console.log(req.body) //req.body me data ayega mtlb body se jo bhi data send hoga wo console me print oga

// })




// // AB HAM EK API BANAYENGE JISKI MDDD SE USER NE JITNE BHI NOTES BANAYEW HONGE WO UN SBHI KO EK SATH DEKH SKEGA

// //yani server se front end me data dikhega 

// app.get('/notes', (req, res) => {//data server se fntend pe jarha hai get method k zariya

//     res.status(200).json({
//         messege: "all notes feched sucessfully",
//         notes: notes
//     })

// })

// //ab kya hoga ab h postman pe jayenge aur waha se phle post methoduse krenge data send krenge server pe  fir data server pe ane k baad dobara post man pe jayenghe aur fir get method krke server se data fetch krenge tb ye work krega aur sare notes show honge



// /* ab ham DELETE metohd use krenge kisi bhi node ko delete krne keliye  
// ab hme jis node ko delete krn hai wha hm /notes/index , index ki jo value denge wo note dlt hojayega
// delete(/notes/1,2,3,4,5 etc
// */
// app.delete('/notes/:index', (req, res) => {
//     const index = req.params.index //is index pr kya value ayi wo hm req.params.index se pta krenge

//     delete notes[index]//yaha pe jo notes ka index milega wo delt hojayega

//     res.status(200).json({
//         messege: "not deleted sucessfully"
//     })

// })





// /** ab ham patch method ka use krnge existing data ko update krne keliye  */

// app.patch('/notes/:index', (req, res) => {

// const index = req.params.index  //yaha se hmne index ko nikal liya 

//     const description = req.body.description // ab jo body me description hai usko mikal k ek variable me assign krdenge

//     const title = req.body.title
//     notes[index].title = title


//     notes[index].description = description
//     //aur us note ka jo bhi description hoga usko hm naye wale se update krdenege


//     res.status(200).json({
//         messege: "note updated sucessfully"
//     })
// })

















/*AB YAHA SE NOTE KA KAAM CHALU DATA BASE K SATH

YAHA HM 4 API CREATE KRENGE  AUR DAT KO DATABASE ME STORE KRENGE

POST /NOTE => CREATE A NOTE
GET /NOTE => GET ALL NOTES
DELETE /NOTE => DELETE ANY NOTE
PATCH /NOTE => UPDATE A NOTE
*/


app.post("/notes",async (req,res)=>{
    console.log(req.body)
    const data= req.body //body se jo data ayega usko ek var me daal diye {title & description}

    //ab ham ne jo notemodel ko require kiya tha jisme hamara data store hoga ab use hm data ko add krenge yani note model me  re.body(data) ke values title aur desc. ko note module me add krenge
    await notemodel.create({
        title:data.title,
        description: data.description

        //yaha pe mtlb hai ki hmne ek obj banaya jisme title me data ka jo bhi title rhega wo notemodel ka title obj m store krdenege
    })
    //post method k zariya hmne jo data send kiya (req.body) wo ake data e save save hua aur notemodel. create se ek model create kiya jisme ddata l title aur desc. jake notemodel k title aur desc. me save hogye 

    res.status(201).json({
        messege:"note created sucessfully"

    })




    app.get('/notes',async(req,res)=>{//DATA KO GET KRNE KELIYE GET METHOD HM FIND() KA USE KRENGE aur "FIND()" ka kaam ye hai ki jitne bhi note ya daa create hue hain DB me unhe yaha pe lake rkhhdoooo
            
        const notes= await notemodel.find() //find() hamesha ek aray return krega isiliye isko note me daal diye

        res.status(200).json({
            messege:"notes fetched sucessfully",
            notes:notes
        })

    })





    //ab hm ek note ko delete krnge aur delete krne keliuye ham id ka use krenge kyuki index isme nahi hota 
    app.delete("/notes/:id",async (req,res)=>{

        //ab kisi ko not ko dlt krnekeliye jm db se ek id copy krlenge aur postm,an k dekete api me jake notes/id me likhdnege
        const id=req.params.id
        await notemodel.findOneAndDelete({
            _id:id
            //yaha pe db me isd _id se save rhti hai isliye yaha aise likhte hain

        })//ek particulr cheez ko find krega aur delete krega
    
    res.status(200).json({
        messege:"note delted sucessfully"
    })
    })
})




app.patch('/notes/:id',async(req,res)=>{

    const id=req.params.id;
    const description=req.body.description//frontend ka description


    //findone&update hmse 2 obj {jis basis pe find krnahai eg:- id} {kya update krna hai eg:- description} mangti hai
    await notemodel.findOneAndUpdate({
        _id:id},{description:description})
        
    res.status(200).json({
        messege:"note updated sucessfully"
    })
})


module.exports = app
/** yaha se ab server ko export krenge */