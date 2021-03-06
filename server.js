const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));


app.get("/", function(req, res){
    res.sendFile(__dirname + "/views/index.html");
});


app.get("/login", function(req, res){
    res.sendFile(__dirname + "/views/login.html");
});


app.post("/login", function(req, res){
  var login_data = {
    userName : req.body.usr,
    password : req.body.pwd,
  };
  res.redirect("/");
});

app.get("/signup", function(req, res){
  res.sendFile(__dirname + "/views/signup.html")
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
