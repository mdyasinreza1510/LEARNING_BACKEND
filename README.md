<h1>LEARNING BACKEND FROM BASIC TO ADVANCE... </h1>

<h1>Phase 1 — Backend Fundamentals (26/7/26)</h1>

What is Backend?
Frontend vs Backend
Client ↔ Server
How the Internet Works
HTTP
Request & Response
HTTP Methods
GET (read)
POST (create)
PUT (update existing/ full update data)
PATCH (partially update)
DELETE (delete the data)
Status Codes
    200 → Success
    201 → Created
    400 → Bad Request
    401 → Unauthorized
    403 → Forbidden
    404 → Not Found
    500 → Server Error
    
Headers
REST API
JSON

<h1>Phase 2 — Node.js</h1>

-> What is Node.js?
-> Installation
-> REPL
  #node -v
  #npm -v
  #node (to start REPL AND  write CODE js in terminal)
  .exit (to exit from the terminal)

<h1>MODULES</h1>
   A Module is a separate JavaScript file that contains reusable code.
   fs
   path
   os
   http
   
    Core Module      → Built into Node.js
    Local Module     → Created by you
    Third-party      → Installed using npm

    require()        → Import
    module.exports   → Export


<h1>PACKAGES -></h1>

 /* 1... pack ko use krne keliye sbse pehle ek func. banaye  jisme "require("pack name ") likhnge aur console me func likhneg  fir terminal me node filename.js likhenge */

// const catme =require('cat-me');
// console.log(catme());



<h1>PHASE 3 => CREATING & STARTING SERVER</h1>

 1. we install express to make a best server.
 2. npm init -y => nodejs intialization
 3. to use the package  we write const express = require ('express');


<h1>PHASE 4 => REST API</h1>
<h3>HTTP METHODS</h3>
1. GET    => (JAB DATA SERVER SE FETCH KRNA HO)
2. POST   => (JAB SERVER PE DATA SEND KRNA HO )
3. PATCH  => (JAB SERVER PR ALREADY EXIST DATA KO UPDATE KRNA HO)
4. DELETE => (SERVER SE DATA DELETE KRNA HO )
5. learning postman
    .LEARNED HOW TO USE GET,POST,PATCH AND DELETE METHODS

<h1>PHASE 4 => MONGO DATABASE.</h1>
1. MONGO DB (DATABASE) <br>
2. coonect server to database
<br>
3. MAINLY 4 OPERATION IN DATABASE
<br>
    C => CREATE
    <br>
    R => READ
    <br>
    U => UPDATE
    <br>
    D => DELETE
    <br>
4. CREATED A CLUSTER IN MOGO DB AND CONNECTED IT WITH MONGO DB COMPASS

<h2>MONGOOSE </h2>
 => SERVER KO DAATABSE SE CONNSCT KRNE KELIYE EK PCKG INSTALL KRENGE JISKA NAAM HAI MONGOOSE HAI 
 IT CONNECTS THE SERVER TO BACKEND

<h2>toconnect the db</h2>
 > create a folder (db) in src 
 > create a file (db.js) in DB FOLDER
 > WRITE THE LOGIC TO CONNECT THE DATABASE
 <h2>CRUD OPERATIION</h2>
 > USED POST METHOD TO SEND NOTES IN DATABASE (MODEL.CREATE())
 > USED GET METHOD TO FETCH ALL THE SENT SONTES FROM THE DATABASE (MODEL.FIND())
 > USED DELETE METHOD TO DLETE A NOTE USING ITS ID (MODEL.FINDONEANDELETE())
 > USED PATCH METHOD TO UPADTE A NOTE IN DB (MODEL.FINDONEANDUPDATE())

 <h1>POST AND FEED (MINI-PROJECT)</h1>
 <br>

 1) created a frontend using ract where i created two component one for   creating a feed and other for geting all the created post using CRUD 

2) created the backend firstly used the mutler,imagekit,mongodb,express

 <br>

 <h1>AUTHENTICATION</h1>

  THERE ARE FOR TYPES IN AUTHENTICATION

 1) VALIDATION :-  JO DATA HAME MIL RHA HAI USKA FORMAT SAHI HAI YA NAHI JAISE EMAIL HAI TO EMAIL HONA CHAIYE NAKI NUMBER
 - mobile = 123456789
 - email = 123456789(not valid) / modiji@gmail.com
 - fullname = narendar modi kam bakc.....
 - password = meloni@modi


 2) VERIFICATION :- JO DATA USER DE RHA HAI WO SAHI HAI YA NAHI ISKO VERIFY KRNE KA PROCESS VERIFICATION KEHATA HAI


 3) AUTHENTICATION :- REQ JIS USER K PASS SE ARHIHAI USKO IDENTIFY KRNA AUTHENTICATION KEHLATA HAI


 4) AUTHORIZATION :- EK USER K PAAS KITNA ACCES RHGA KISI BH DATA KA 

 5) THERE ARE TWO TYPES OF AUTHENTICATION
   -> SESSION BASED
   -> TOKEN BASED  (✅)
