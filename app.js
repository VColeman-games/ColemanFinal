var https = require("https");
var path = require("path");
var express = require('express');
var fetch = require('node-fetch');
var app = express();
var port = process.env.PORT || 3000;
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get("/", (req,res) => {

    

    res.render("index");


});


app.listen(port, function () {

});