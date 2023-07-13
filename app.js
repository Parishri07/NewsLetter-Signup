const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.use(express.static("public"));
//styles.css and images are static files, they are not directly included when we include the html page, we use static to include these pages. Specify a folder name and add all these sheets in that folder.

app.use(bodyParser.urlencoded({extended: true}));
//we need bodyParser to use elements of body of the form

app.get("/", function(req, res){
    res.sendFile(__dirname+"/signup.html")
})

app.post("/", function(req, res){
    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var email = req.body.email;
    console.log(firstName, lastName, email);
})

app.listen(3000, function() {
    console.log("Server ported on port 3000");
})

//API key
//f96da74df38c3810a28e0d18c3d7393a-us21
