var http = require('http');
var server = http.createServer(function(req,res){
    res.write('<h1> App With Node Js</h1>')
    res.end()
})

server.listen(7800);