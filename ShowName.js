var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    if (req.url.startsWith('/hello/:')) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        var path = req.url.split(':');
        var name = path[1];
        if(name != ""){
            res.write(JSON.stringify({ hello: name }));
        }
        else{
            res.write(JSON.stringify({ hello: "Write name" }));
        }
        res.end();
    } else {
        res.end('Invalid request');
    }
}).listen(8080);    