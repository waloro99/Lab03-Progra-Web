var http = require('http');
var url = require('url');
var fs = require('fs');
var bal = require('./CheckFile3');

http.createServer(function (req, res) {    
    res.writeHead(200, {'Content-Type': 'application/json'});
    if (req.url == '/') {
        fs.readFile('CheckFile2.html', function(err, data) {
            if (err) {
                res.writeHead(404, {'Content-Type': 'text/html'});
                return res.end("404 Not Found");
            } 
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    }
    else if (req.url.startsWith('/input/?finput=')) {
        var q = url.parse(req.url, true).query;
        var txt = q.finput;
        if (bal.balancedFunc(txt)) {
            res.end('Estan Correctamente Escritos.');
        }
        else {
            res.end('No Estan Correctamente Escritos.');
        }
    }
    else {
        res.end('Invalid request');
    }
}).listen(8080);