const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
    res.sendFile(__dirname + "/public/index.html");
});

<<<<<<< HEAD
app.get("/login", function(req, res){
    res.sendFile(__dirname + "/public/login.html");
});
=======
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

>>>>>>> 7f25d1b0a8591ca0edcb395e69660f59fcb9960f
app.listen(3000, function(){
    console.log("Server Started at port 3000.");
})
