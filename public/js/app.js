var socket = io();

socket.on('connect',function(){
	console.log('connected')
});

socket.on('message',function(message){
	console.log('New Message '+message.text);
});