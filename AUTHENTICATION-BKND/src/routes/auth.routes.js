/*auth.router ham api banate hain sirf api create krne keliye isme ham logic nahi likhte hain logic  ham auth.controller file me likhte hain

1) jaise hamne abhi banaya register api  ab isme hm kaise user ko register krenge uska logic dusre file me batayenge auth.controller me  

2) FIR HMNE JO LOGIC CONTROLLER file ME LIKHA HAI YANI JIS FUNCTION ME LIKHA HAI USKO REQUIRE KRKE USE KRENGE  JAISE authController = require('./controllers/auth.controller) FIR HME USKE FUNCTION KO USEKRNA HAI JOKI EK OBJ HAI ISILIOYE AISE LIKHENGE "authController.userregister "(function)

usage:- router.post("/register",authcontroller.{obj /ie:- userregister})

3) ab ham jayenmge app.js me waha next steps hain
*/


const express = require('express')
const authController = require('../controllers/auth.controller')



//ab isi router se ham api create krnge 
const router = express.Router()


/*           /api        / auth  /the logic function */
router.post('/register', authController.registeruser)


router.get('/account',authController.getcookie)

router.get('/alluser',authController.getUsers);



module.exports = router