var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    if (req.url == '/hello') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ hello: new Date() }));
        res.end();
    } else {
        res.end('Invalid request');
    }
}).listen(8080);    