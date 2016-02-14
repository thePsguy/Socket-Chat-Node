var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/',function(req,res){
	res.sendFile(__dirname + '/index.html');
});

app.get('/style', function(req,res){
	res.sendFile(__dirname + '/style.css');
});

io.on('connection', function(socket){
	console.log('New Connection');
	
	socket.on('disconnect', function(){
		/*console.log('Disconnected');*/
	});

	socket.on('Message', function(msg){

		io.emit('Message', msg);
	});
});

http.listen(8080,function(){
	console.log('listening in *:8080');
});
