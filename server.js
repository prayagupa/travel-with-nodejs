var http = require('http');

var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "application/json"});
  var json = JSON.stringify({
    destination: "NORTH 30TH ST",
    miles: 14
  });
  response.end(json);
});

server.listen(8000);

console.log("Server running at http://127.0.0.1:8000/");
