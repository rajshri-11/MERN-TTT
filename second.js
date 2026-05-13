// first.js

var http = require('http');

http.createServer(function(req, res) {

    res.writeHead(200, { 'content-type': 'text/html' });

    res.write("<b>Hello how are you</b>");

    res.end("End of output");

}).listen(8080, () => console.log("Server running at port no 8080"));