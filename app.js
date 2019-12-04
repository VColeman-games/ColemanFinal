var https = require("https");
var path = require("path");
var express = require('express');
var fetch = require('node-fetch');
var app = express();
var port = process.env.PORT || 3000;
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

var Date;
var info;
var title;
var url;

app.get("/", (req,res) => {

    getData();

    res.render("index", {date:date, info:info,title:title, url:url});


});
function getData(){
fetch('https://csuserversidewebdevfinal.herokuapp.com/')
.then()
.then(data=>{
    Date = data.date;
})

console.log(Date);

}

app.listen(port, function () {

});