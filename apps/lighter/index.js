var util = require('util');
var http = require('http');
var url = require('url');
var qs = require('querystring');
var os = require('os')
var port = process.env.PORT || process.env.port ||
  process.env.OPENSHIFT_NODEJS_PORT || 8000;
var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var nodeEnv = process.env.NODE_ENV || 'unknown';
var version = require('./package.json').version || 'unknown';
var startedByNpm = !!process.env.npm_package_version;

var server = http.createServer(function (req, res) {
  var url_parts = url.parse(req.url, true);

  var body = '';
  req.on('data', function (data) {
    body += data;
  });
  req.on('end', function () {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    if (req.method === 'GET') {
    } else if (req.method === 'POST') {
      res.write(body);
    }
    res.end();
  });
});

server.listen(port,ip, function(){
  var address = server.address();
  // console.log('Server running on ' + address.address + ':' + address.port);
});
