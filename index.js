var express = require('express')
, http = require('http')
, MongoClient= require('mongodb').MongoClient;
var app = express();
app.set('port', process.env.PORT || 8080);


app.get('/',function(req,res){

var db = MongoClient.connect('mongodb://127.0.0.1:27017/cmpe283', function (err,db){
if (err)
	throw err;
console.log("Mongodb connected");
mycollection = db.collection("cmpe283");
var cursor = mycollection.find({});
cursor.nextObject(function(err,doc){
	if (err)	
	 throw err;
	//console.log(doc);
	res.send("Hello World from "+ doc.name);
	});
});

});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

