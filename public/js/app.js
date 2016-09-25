var socket = io();

socket.on('connect', function () {
	console.log('Connected to Socket fe');
});

socket.on('message', function (message) {
	console.log('New message');
	console.log(message.text);
});