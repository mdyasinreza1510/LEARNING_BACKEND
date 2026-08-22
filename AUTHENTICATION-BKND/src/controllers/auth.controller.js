/* 
1) AUTH.CONTROLLER ME HAM LOGIC LIKHENGE ISILIYE HME PHLE MODEL KO REQUIRE KRNA HOGA    

2) FIR EK FUNCTION BANAYENGE 'REGISTERUSER' FIR HAM USME LOGIC DESCRIBE KRENGE KI USER KO KAISE REGISTER KRNA HAI 

3) FIR FUNCTUION KO OBJ K FORM ME EXPORT KRENGE Q KI HME US FUN. K MATERIALS KO USE KRNA HAI ISILIYE USE EK OBJ BANA K EXPORT KRENGE 

4) fir ham ek user bvanayenge u1
 ab mongo db me jo bhi data create hoga uski ek apni id hogi 10000 user = 10000 ids  aur sb different hogi 

    - AB JAB SERVER USER KO DB ME REGISTER KREGA TO SERVER EK TOKEN GENERATE KREGA AUR TOKEN GENERATE HOGA JSONWEBTPKEN SE (JWT)

    - AB TOKEN CREATE KRNGE TOKEN = jwt.sign()
    aur sign 2 cheze mangt6a hai user ka data aur dusra hota hai jwt_secret

5) AB HAM COKIE KA USE KRENGE TOKEN KO SAVE KRNE KELIYE 
*/

//5:20:21
const usermodel = require('../models/user.model');
const jwt = require('jsonwebtoken');


//yaha ham logic likhenge api ka 
async function registeruser(req, res) {

    //yaha jo hmne {username , email, password} me likhahai hmne directly req.body se jo username,email , pass aya hai usko acces krre hain eg:- data=req.body => data.username /email/pass
    const { username, email, password } = req.body;



    /* findOne() Ye MongoDB me ek document dhoondhta hai jo tumhari condition ko match karta ho.
    
    findOne() MongoDB collection me di gayi condition ke hisaab se pehla matching document dhoondhta hai.
    
    Agar document mil jaye to object return karta hai, aur agar na mile to null return karta hai.*/
    const useralreadyexist = await usermodel.findOne({
        email
    })
    //aur isko hm user create krne se phle likhnge
    if (useralreadyexist) {
        //return is very important
        return res.status(409).json({
            messege: "USER ALREADY EXIST"
        })
    }




    // yaha ham abhi ek user create krenge " u1 "
    const user = await usermodel.create({
        /* ab ham yaha data.username ki jgha seedha username ,email,pass likhdenge
        jo ki hamare data ko DB me save krdege */
        username,
        email,
        password

    })



    //ab ek token banayenge aur wo token hr user ki apni id hogi
    const token = jwt.sign({id: user._id},process.env.JWT_SECRET);//Internally JWT user ki id aur secret in dono ka use karke ek token banata hai:

    res.cookie("token", token)//yaha pe ham token ko cookie me send krrhe hain server se frontend me save krenege



    res.status(201).json({
        messege: "user registered sucessfully",
        user,


    })

    console.log(req.body)


}

function getcookie(req, res) {
    res.json({
        msg: " cookies fetched sucessfully",
        cookies: req.cookies,

    })

}

async function getUsers(req, res) {

    const alluser = await usermodel.find();

    res.status(200).json({
        messege: "ALL USER DETAILS FETCHED SUCESSFULLY",

        alluser: alluser
    })
}









module.exports = { registeruser, getcookie, getUsers }
