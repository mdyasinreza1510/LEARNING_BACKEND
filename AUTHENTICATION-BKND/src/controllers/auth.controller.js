/* 
1) AUTH.CONTROLLER ME HAM LOGIC LIKHENGE ISILIYE HME PHLE MODEL KO REQUIRE KRNA HOGA    

2) FIR EK FUNCTION BANAYENGE 'REGISTERUSER' FIR HAM USME LOGIC DESCRIBE KRENGE KI USER KO KAISE REGISTER KRNA HAI 

3) FIR FUNCTUION KO OBJ K FORM ME EXPORT KRENGE Q KI HME US FUN. K MATERIALS KO USE KRNA HAI ISILIYE USE EK OBJ BANA K EXPORT KRENGE 

4) fir ham ek user bvanayenge u1
 ab mongo db me jo bhi data create hoga uski ek apni id hogi 10000 user = 10000 ids  aur sb different hogi 

    - AB JAB SERVER USER KO DB ME REGISTER KREGA TO SERVER EK TOKEN GENERATE KREGA AUR TOKEN GENERATE HOGA JSONWEBTPKEN SE (JWT)
    -
*/


const usermodel = require('../models/user.model');
const jwt = require ('jsonwebtoken');





//yaha ham logic likhenge api ka 
async function registeruser(req,res){

    const {username, email, password } = req.body;



    // yaha ham abhi ek user create krenge " u1 "
    const user= usermodel.create({
        username,email,password
    })
}






module.exports = {registeruser}