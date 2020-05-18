var fs = require('fs');

/*fs.writeFile('MyCode.txt',"Code With NodeJS",function(err){
    if(err) throw err;
    console.log("File is created")
})*/

/*fs.appendFile("MyCode.txt" ,Math.floor(Math.random()*1000)+" Code With NodeJS \n",function(err){
    if(err) throw err;
    console.log("File is created")
})*/
/*
fs.readFile('db.json','utf-8',function(err,data){
    if(err) throw err;
    console.log(data)
})
fs.rename("MyCode.txt","MyText.txt",function(err){
    if(err) throw err;
    console.log("File renamed")
})
*/
fs.unlink("MyText.txt",function(err){
    if(err) throw err;
    console.log("File Delete")
})