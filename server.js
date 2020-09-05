const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
    res.sendFile(__dirname + "/public/index.html");
});


app.get("/login", function(req, res){
    res.sendFile(__dirname + "/public/login.html");
});

app.get("/signup", function(req, res){
  res.sendFile(__dirname + "/public/signup.html")
});

app.post("/signup", function(req, res){
  var userData = {
    userName : req.body.userName,
    password : req.body.password,
    aadhar : req.body.aadhar,
    employerName : req.body.employerName,
    gender : req.body.gender,
    dob : req.body.dob,
    mobNumber : req.body.mobNumber,
  };
  res.redirect("/");
})


app.listen(3000, function(){
    console.log("Server Started at port 3000.");
})
