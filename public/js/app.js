var socket = io();

socket.on('connect', function () {
	console.log('Connected to Socket fe');
});

socket.on('message', function (message) {
	console.log('New message');
	console.log(message.text);
});

// 
var $form = jQuery('$message-form');

$form.on('submit', function (event) {
	event.preventDefault();

	socket.emit('message', {
		text: $message.val()
	});

	var $message = $form.find('input[name=message]');

	
	$message.val('');
});
