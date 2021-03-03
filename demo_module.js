var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime()); //devuleve la concatenacion con la funcion del archivo myfirstmodule
    res.end();
}).listen(8080);