var util = require('util');
var http = require('http');
var url = require('url');
var qs = require('querystring');
var os = require('os')
var port = process.env.PORT || process.env.port ||
  process.env.OPENSHIFT_NODEJS_PORT || 8000;
var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

var FlameLighter = require('./lib/flame');

var server = http.createServer(function (req, res) {
  var url_parts = url.parse(req.url, true);

  var body = '';
  req.on('data', function (data) {
    body += data;
  });
  req.on('end', function () {
    if (req.method === 'POST') {
      res.writeHead(200, {'Content-Type': 'application/json'});
      var result = {};
      try{
        var msg = JSON.parse(body);
        // message format:
        // {
        //   cmd: 'on || off || toggle'
        // }
        switch (msg.cmd) {
          case 'on':
            FlameLighter.on();
            result.result = 'ok';
            break;
          case 'off':
            FlameLighter.off();
            result.result = 'ok';
            break;
          case 'toggle':
            FlameLighter.toggle();
            result.result = 'ok';
            break;
          default:
            result.result = 'error';
            result.data = 'unknow command: ' + msg.cmd;
            break;
        }
      }catch(err){
        result.result = 'error';
        result.data = err;
      }
    } else {
      res.writeHead(200, {});
    }
    res.write(JSON.stringify(result));
    res.end();
  });
});

server.listen(port,ip, function(){
  var address = server.address();
  console.log('Server running on ' +
    address.address + ':' + address.port);
});
