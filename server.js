const express = require("express");
const { response } = require("express");

app = express()

app.get("/", function(req, res){
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(3000, function(){
    console.log("Server Started at port 3000.");
})
