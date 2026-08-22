const express = require('express');
const router = express.Router();
const jwt= require('jsonwebtoken');
const usermodel = require('../models/user.model');


router.post('/create', async (req,res)=>{

    const token= req.cookies.token;
     
    //YAH AGR USER K PAAS TOKEN NHI HOGA TO USKO ERROR SHOW HOGA
    if(!token){
        return res.status(401).json({
            messege:"unauthorized"
        })
    }
    //yaha se hm verify krenge token ko kis token ko jo amare paas req.body se ara hai mtlb.reqcookies se arha hai 
    try{
       const decoded= jwt.verify(token,process.env.JWT_SECRET);
        const user= await usermodel.findOne({
            _id:decoded.id
        })
       
       console.log(decoded); //gives id and iat 
       console.log(user);


    } catch(err){
        return res.status(401).json({
            messege:"TOKEN IS INVALID"
        })
    }
   
    // body se jo cokkie ayegi wo print hogi

    res.send("post created sucessfully");
})






module.exports = router;