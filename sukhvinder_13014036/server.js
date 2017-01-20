var http = require('http');
var server = http.createServer(function(req, res)
{
  res.writeHead(200, {'content-type': 'text/plain'});
res.end('hello buddy');
});
server.listen(3000, '127.0.0.1');
conso;e.log('hello buddy, now listen the port 3000');