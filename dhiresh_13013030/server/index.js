var express = require('express');
var mongoose= require('mongoose');
var mor= require('morgan');
var body=require('body-parser');
var method=require('method-override')
var app = express();


app.listen('3000',function(){
console.log('listening');
});
mongoose.connect();

app.get('/',function(req,res){
	res.send("Great");
});