const express = require("express");
const { response } = require("express");

app = express()

app.get("/", function(req, res){
    res.send("<h1>Hello World!</h1>");
});

app.listen(3000, function(){
    console.log("Server Started at port 3000.");
})