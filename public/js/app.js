var socket = io();

socket.on('connect', function () {
	console.log('Connected to Socket fe');
});