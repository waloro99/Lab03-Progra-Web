var http = require('http');

//create a server object:
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'}); //200 significa que todo está bien, el segundo argumento es un objeto que contiene los encabezados de respuesta.
    res.write(req.url); //write a response to the client
    res.end(); //end the response
}).listen(8080); //the server object listens on port 8080