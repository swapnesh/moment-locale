var express = require('express'),
	app = express(),
	opn = require('opn'),
	path = require('path'),
	PORT = 8000;

app.use('/public', express.static('public'));

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/cdn', function(req, res){
	res.sendFile(path.join(__dirname + '/index-cdn.html'));
})

app.listen(PORT,function() {
	console.log('Server started at port ', PORT);
	opn('http://localhost:' +PORT);
})