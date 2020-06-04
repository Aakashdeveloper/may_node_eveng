const express = require('express');
const app = express();
const mongo = require('mongodb');
const port = process.env.PORT || 9900;
const MongoClient = mongo.MongoClient;
const bodyParser = require('body-parser');
const cors = require('cors');
const mongourl = "mongodb://localhost:27017";
let db;
let col_name  = "node@10";

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

app.get('/',(req,res) =>{
    res.status(200).send('Health OK')
});

app.get('/users',(req,res) => {
    var query = {}
    var name = Object.keys(req.query)
    var qname = name[0];
    console.log(req.query)
    console.log("qname>>>>>",qname)
    console.log(">>>>",req.query.qname)
    if(req.query.id){
        query = {_id:parseInt(req.query.id),active:true}
    }
    else if(req.query.city){
        query = {city:req.query.city,active:true}
    }
    else{
        query = {}
    }
    db.collection(col_name).find(query).toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})


app.post('/addUser',(req,res) => {
    console.log(req.body)
    db.collection(col_name).insert(req.body,(err,result) => {
        if(err){
            throw err
        }else{
            res.send('Data Added')
        }
    })
});

app.put('/updateUser',(req,res) => {
    db.collection(col_name).update(
        {_id:req.body._id},
        {
            $set:{
                name: req.body.name,
                city: req.body.city,
                phone: req.body.phone,
                active: true
            }
        },(err,result) => {
            if(err){
                throw err
            }else{
                res.send('Data Updated')
            }
        }
    )
});

//delete
app.delete('/deleteUser',(req,res) => {
    db.collection(col_name).remove({_id:req.body.id},(err,result)=> {
        if(err)
            throw err
        else{
            res.send('Data Deleted')
        }
    })
})


MongoClient.connect(mongourl,(err,client) => {
    if(err) console.log(err);
    db = client.db('classpractice');
    app.listen(port,(err) => {
        console.log(`Server is running on port ${port}`)
    })
})