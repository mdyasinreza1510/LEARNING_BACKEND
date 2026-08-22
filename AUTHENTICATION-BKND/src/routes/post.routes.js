const express = require('express');
const router = express.Router();


router.post('/create', (req,res)=>{

    console.log(req.body);
    console.log(req.cookies);
    // body se jo cokkie ayegi wo print hogi

    res.send("post created sucessfully");
})






module.exports = router;