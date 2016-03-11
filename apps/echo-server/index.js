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
    // res.write('Request Type: ' + req.method + '\n');
    // res.write('Host: ' + req.headers.host + '\n');
    // res.write('HTTP/' + req.httpVersion +'\n');
    // res.write('Request headers:\n');
    // res.write(util.inspect(req.headers, null) + '\n');
    // res.write('Request query:\n');
    // res.write(util.inspect(url_parts.query, null) + '\n');
    // res.write('Request body:\n');
    // res.write(util.inspect(body, null) + '\n');
    res.end();
  });
});

// console.log('Initializing Server on ' + ip + ':' + port);
// console.log('This is a node.js echo service v' + version);
// console.log('node.js Production Mode: ' +
//   (nodeEnv == 'production' ? 'yes' : 'no'));
// console.log('node.js ' + process.version);
// console.log('Executed by npm: ' + (startedByNpm ? 'yes' : 'no'));
// console.log('Host: ' + os.hostname());
// console.log('OS Type: ' + os.type());
// console.log('OS Platform: ' + os.platform());
// console.log('OS Arch: ' + os.arch());
// console.log('OS Release: ' + os.release());
// console.log('OS Uptime: ' + os.uptime());
// console.log('OS Free memory: ' + os.freemem() / 1024 / 1024 + 'MB');
// console.log('OS Total memory: ' + os.totalmem() / 1024 / 1024 + 'MB');
// console.log('OS CPU count: ' + os.cpus().length);
// console.log('OS CPU model: ' + os.cpus()[0].model);
// console.log('OS CPU speed: ' + os.cpus()[0].speed + 'MHZ');

server.listen(port,ip, function(){
  var address = server.address();
  // console.log('Server running on ' + address.address + ':' + address.port);
});
