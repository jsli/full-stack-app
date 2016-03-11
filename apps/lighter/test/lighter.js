// usage: node lighter.js <port>

var requestify = require('requestify');

var port = process.argv[2] || 8000;

requestify.post('http://127.0.0.1:' + port, {
  cmd: 'on'
})
.then(function(response) {
  console.log(response.body);
});

requestify.post('http://127.0.0.1:' + port, {
  cmd: 'off'
})
.then(function(response) {
  console.log(response.body);
});

requestify.post('http://127.0.0.1:' + port, {
  cmd: 'toggle'
})
.then(function(response) {
  console.log(response.body);
});

requestify.post('http://127.0.0.1:' + port, {
  cmd: 'xxx'
})
.then(function(response) {
  console.log(response.body);
});