var express = require('express');
var request = require('request');
var app = express()
var port = 9600;

var apiUrl ="http://api.openweathermap.org/data/2.5/forecast/daily?q=London&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29"


app.get('/weather',function(req,res){
    request(apiUrl,function(err,response){
        res.send(response.body)
    })
})

app.listen(port,function(err){
    if(err) throw err;
    console.log("Server is running on port "+port)
})