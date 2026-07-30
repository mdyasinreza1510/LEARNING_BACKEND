LEARNING BACKEND FROM BASIC TO ADVANCE...

Phase 1 — Backend Fundamentals (26/7/26)

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

Phase 2 — Node.js

-> What is Node.js?
-> Installation
-> REPL
  #node -v
  #npm -v
  #node (to start REPL AND  write CODE js in terminal)
  .exit (to exit from the terminal)

-> MODULES
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


PACKAGES ->

 /* 1... pack ko use krne keliye sbse pehle ek func. banaye  jisme "require("pack name ") likhnge aur console me func likhneg  fir terminal me node filename.js likhenge */

// const catme =require('cat-me');
// console.log(catme());













PHASE 3 ..........CREATING & STARTING SERVER...................

 1. we install express to make a best server.
 2. npm init -y => nodejs intialization
 3. to use the package  we write const express = require ('express');


PHASE 4....................REST API.....................
HTTP METHODS
1. GET    => (JAB DATA SERVER SE FETCH KRNA HO)
2. POST   => (JAB SERVER PE DATA SEND KRNA HO )
3. PATCH  => (JAB SERVER PR ALREADY EXIST DATA KO UPDATE KRNA HO)
4. DELETE => (SERVER SE DATA DELETE KRNA HO )
5. learning postman
    .LEARNED HOW TO USE GET,POST,PATCH AND DELETE METHODS




PHASE 4....................MONGO DATABASE.....................
1. MONGO DB (DATABASE)
2. coonect server to database
3. MAINLY 4 OPERATION IN DATABASE
    C => CREATE
    R => READ
    U => UPDATE
    D => DELETE
4. CREATED A CLUSTER IN MOGO DB AND CONNECTED IT WITH MONGO DB COMPASS

    JYNqqzAr48sd6hVT
    mongodb+srv://aeccse2024mdyasinreza_db_user:JYNqqzAr48sd6hVT@comp-backend.2mmlrs9.mongodb.net/

<h4>MONGOOSE </h4>
 => SERVER KO DAATABSE SE CONNSCT KRNE KELIYE EK PCKG INSTALL KRENGE JISKA NAAM HAI MONGOOSE HAI 

 IT CONNECTS THE SERVER TO BACKEND