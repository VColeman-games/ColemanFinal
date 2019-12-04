var https = require("https");
var path = require("path");
var express = require('express');
var fetch = require('node-fetch');
var app = express();
var port = process.env.PORT || 3000;
var WebDay = "";
var WebInfo = "";
var WebTitle = "";
var WebImg = "";

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));



app.get("/", function(req,res) {

    getData();
    
    res.render("index", ({Day:WebDay, Info:WebInfo, Title:WebTitle, Img:WebImg}));

;
});


function getData(){
fetch('https://csuserversidewebdevfinal.herokuapp.com/')
.then(res => res.json())
.then(data=>{
    WebDay = data.date;
    WebInfo = data.explanation;
    WebTitle = data.title;
    WebImg = data.url;

    console.log(WebDay);
    console.log(WebInfo);
    console.log(WebTitle);
    console.log(WebImg);

});

}



app.listen(port, function () {

});