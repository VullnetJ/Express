const express = require("express");
const app = express();

app.get("/text", (request, response, next)=>{
response.send("Hello there!"); // it sends anything back to the user
}); // => is a function 
// middleware 

function fx1(req, res, next)
    {
    console.log("Doing the 1st function");
    next();
}
function fx2(req, res, next){
    console.log("Doing the 2nd function");
    next();
}
function fx3(req, res, next){
    res.send("Doing the 3nd function");
}

app.get("/dosomething", [fx1, fx2, fx3]);


app.listen(3000);