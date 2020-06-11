import express from 'express';
const app = express();
const port = 8800;
import database from './database';

app.get('/mydata',(req,res) => {
    let output = database.getData('first')
    res.send(output)
})

app.post('/mydata',(req,res) => {
    var mydata ={"name":"Alvin", "class":'Node'}
    let output = database.postData('first',mydata)
    res.send(output)
})


app.listen(port,(err) => {
    console.log(`Server iss running on port ${port}`)
})