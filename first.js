// first.js

var http = require('http');

http.createServer(function(req, res) {

    res.write("<b>Hello how are you</b>");
    res.end("End of output");

}).listen(8080, () => console.log("Server running at port no 8080"));




/*



// basic Node.js server
const http = require('http');

const server = http.createServer((req, res) => {
  res.write('Hello, Node.js!');
  res.end();
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
*/