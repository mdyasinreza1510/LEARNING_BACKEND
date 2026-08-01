


/* 1... pack ko use krne keliye sbse pehle ek func. banaye  jisme "require("pack name ") likhnge aur console me func likhneg  fir terminal me node filename.js likhenge */

// const express = require('express'); //server created

// const app = express();//store krdiya ek app variable me .


/*yaha pe ab hm server ko program krenge  yaha pe hme app.get("/",(req,res) iska mtlb agar / api m koi request ayi to response jayega "hello world  👇👇*/

// app.get("/", (req, res) => {
//     res.send("hello YASIN YOUR SERVER IS RUNNING");
// })

/* agar hm /about denge to jab ham browser me  'localhost:3000/about' likhnge to hme ye output milega  */
// app.get("/about", (req, res) => {
//     res.send("HELLO YASIN YOUR SERVER IS RUNNING YOURE IN ABOUT PAGE");
// })

// app.listen(3000) // server ko start kiya 3000 port no. hai .listen se start kiya server ko.

//ab servers start krne k baad local browser me jake localhost:3000 likhnge result me eror get / aye mtlb serverstart hai 







const dns=require("dns")
dns.setServers(["1.1.1.1", "8.8.8.8"]);





// app.js    => creates the server.
// server.js => starts the server.


//ab server ko import krenge
const app = require("./src/app");

// databse ko import krenge 
const connectdb= require("./src/db/db")

connectdb(); //aur yaha se connect krenge

app.listen(3000,()=>{
    console.log ("server is running on port no 3000")
})//server ko start krenge
