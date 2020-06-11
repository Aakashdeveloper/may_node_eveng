const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3100;

const Pool = require('pg').Pool;
const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'postgres',
    password:'docker',
    port:5432
});

app.get('/user', (req,res) => {
    pool.query('SELECT city,phone,country FROM "user"',(err,result)=>{
        if(err){
            throw err
        }else{
            res.status(200).json(result.rows)
        }
    })
});

app.post('/user',(req,res) => {
    let city = req.body.city;
    let phone = req.body.phone;
    let country = req.body.country;
    pool.query('INSERT INTO "user"(city,phone,country) VALUES ($1,$2,$3);',[city,phone,country,],(err,result) => {
        if(err){
            throw err;
        }else{
            res.status(200).send('Data added')
        }
    })
})

app.listen(port,() => {
    console.log(`App is running on port ${port}`)
})