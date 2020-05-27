var express = require('express');
var restaurantRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";


function router(menu){
	restaurantRouter.route('/')
		.get(function(req,res){
			mongodb.connect(url,function(err,dc){
				if(err){
					res.status(501).send('Error Conneting DB')
				}else{
					const dbo = dc.db('nodeevng');
					dbo.collection('restaurant').find({}).toArray(function(err,data){
						if(err){
							res.status(501).send('Unable to fetch Record')
						}else{
							res.render('restaurant',{title:'Restaurant Page',restaurants:data, menu:menu})
						}
					})
				}
			})
			
		});


	restaurantRouter.route('/details/:id')
		.get(function(req,res){
			var id = req.params.id
			//var {id} = req.params
			//var data = req.query;
			//console.log(data)
			console.log(id)
			mongodb.connect(url,function(err,dc){
				if(err){
					res.status(501).send('Error Conneting DB')
				}else{
					const dbo = dc.db('nodeevng');
					dbo.collection('restaurant').findOne({id:parseInt(id)},function(err,data){
						if(err){
							res.status(501).send('Unable to fetch Record')
						}else{
							//res.send(data)
							res.render('restdetails',{title:'Restaurant Details Page',restaurants:data, menu:menu})
						}
					})
				}
			})
		});
	
	return restaurantRouter
	
}
module.exports = router;