const express = require('express');
const app = express();
const port = process.env.PORT || 9900;
const request = require('request');
const superagent = require('superagent');

//Static File path
app.use(express.static(__dirname+'/public'))
//HTML
app.set('views', './src')
//View Engine
app.set('view engine', 'ejs');

app.get('/',(req,res) =>{
    res.render('index')
});


app.get('/users',(req,res) => {
    //const code = req.query.code;
    const {code} = req.query;
    if(!code){
        res.send({
            success:false,
            message:'Error on login'
        })
    }
    superagent
        .post("https://github.com/login/oauth/access_token")
        .send({
            client_id:"",
            client_secret:"",
            code:code
        })
        .set('Accept','application/json')
        .end((err,result) => {
            if(err) throw err;
            var accesstoken = result.body.access_token;
            const option = {
                url:`https://api.github.com/user`,
                method:'GET',
                headers:{
                    'Accept':'application/json',
                    'Authorization':`token ${accesstoken}`,
                    'User-Agent':'mayapp'
                }
            }
            var output;
            request(option,(err,response,body) => {
                output = body;
                return res.send(output)
            })
        })

})
app.listen(port,() => {
    console.log(`Server is running on port ${port}`)
})