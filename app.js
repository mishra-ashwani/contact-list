var express = require('express');
var mongoose = require('mongoose');
var bodyparser= require('body-parser');
var path=require('path');
var cors=require('cors');

var app=express();

const port=3000;
const route=require('./routes/route');

mongoose.connect('mongodb://localhost:27017/contactlist');
mongoose.connection.on('connected',()=>{
	console.log('DB Connected')
})
mongoose.connection.on('error',(err)=>{
	if(err){
		console.log('Error :- '+err)	
	}
	
})



app.use(cors());
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname,'public')));
app.use('/api',route);



app.get('/',(req,res)=>{
	res.send('Testing')
})

app.listen(port,()=>{
	console.log('Testing')
})