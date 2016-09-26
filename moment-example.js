var moment = require('moment');
var now = moment();

console.log(now.format());
console.log(now.format('X'));
console.log(now.valueOf());
var timestamp = 1474880606877;

var timestampMoment = moment.utc(timestamp);

console.log(timestampMoment.local().format('HH:MM A')); 
// now.subtract(1, 'year');


// console.log(now.format());
// console.log(now.format('MMMM Do YYYY, h:mm:ss a'));