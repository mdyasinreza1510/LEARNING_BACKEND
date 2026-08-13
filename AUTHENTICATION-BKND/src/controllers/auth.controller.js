/* 
1) AUTH.CONTROLLER ME HAM LOGIC LIKHENGE ISILIYE HME PHLE MODEL KO REQUIRE KRNA HOGA    

2) FIR EK FUNCTION BANAYENGE 'REGISTERUSER' FIR HAM USME LOGIC DESCRIBE KRENGE KI USER KO KAISE REGISTER KRNA HAI 

3) FIR FUNCTUION KO OBJ K FORM ME EXPORT KRENGE Q KI HME US FUN. K MATERIALS KO USE KRNA HAI ISILIYE USE EK OBJ BANA K EXPORT KRENGE 

*/


const usermodel = require('../models/user.model')





//yaha ham logic likhenge api ka 
async function registeruser(req,res){

    const {username, email, password } = req.body;
}






module.exports = {registeruser}