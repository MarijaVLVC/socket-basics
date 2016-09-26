var socket = io();

socket.on('connect', function () {
	console.log('Connected to Socket fe');
});

socket.on('message', function (message) {
	console.log('New message');
	console.log(message.text);

	jQuery('.messages').append('<p>' + message.text + '</p>');
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
