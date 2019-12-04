var https = require("https");
var path = require("path");
var express = require('express');
var fetch = require('node-fetch');
var app = express();
var port = process.env.PORT || 3000;
var Day = "";
var Info = "";
var Title = "";
var Img = "";

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));



app.get("/", function(req,res) {

    getData();

    res.render("index", {Day:Day, Info:Info,Title:Title, Img:Img});


});


function getData(){
fetch('https://csuserversidewebdevfinal.herokuapp.com/')
.then(res => res.json())
.then(data=>{
    Day = data.date;
    Info = data.explanation;
    Title = data.title;
    Img = data.url;


})
console.log(Day);
console.log(data.date);
}



app.listen(port, function () {

});