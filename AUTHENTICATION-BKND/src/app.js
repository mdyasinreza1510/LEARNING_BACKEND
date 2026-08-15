const express = require ('express')
const authRoutes= require('./routes/auth.routes') //ip1
const cookieParser = require ('cookie-parser')







const app = express();
app.use(cookieParser())
app.use(express.json());




/* 
1) HAMARE SERVER KO PTA NAHI HAI K HMNE KOI API BANA YA HAI TO PHLE USSE IMPORT KRELNEGE (ip1)

2) THEN HM USSE DIRECT USE KRENGE AUR EK PREFIX K SATH USE KRENGE YANI  hMNE JO BHI API ROUTERS ME BANAYA HAI USE USE KRNE KELIYE HM EK PREFIX KA USE KRENGE  " /api/auth/ authRoutes " 

eg:- /api/auth/ actual api name (eg:- /register)

*/

app.use("/api/auth/",authRoutes)






module.exports = app