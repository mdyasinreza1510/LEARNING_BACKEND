const express = require ('express')
app.use(express.json());
const app = express()
const authRoutes= require('./routers/auth.routes') //ip1


/* 
1) HAMARE SERVER KO PTA NAHI HAI K HMNE KOI API BANA YA HAI TO PHLE USSE IMPORT KRELNEGE (ip1)

2) THEN HM USSE DIRECT USE KRENGE AUR EK PREFIX K SATH USE KRENGE YANI HM JMNE JO BHI API ROUTERS ME BANAYA HAI USE USE KRNE KELIYE HM EK PREFIX KA USE KRENGE  " /api/auth/ authRoutes " 

eg:- /api/auth/ actual api name (eg:- /register)

*/





module.exports = app