var http = require('http');
var Router = require('routes');
var router = Router();
var fs = require('fs')
var path = require('path');

router.addRoute("GET /", (rq, response, p) => {
  response.writeHead(200, {"Content-Type": "application/json"});
  var json = JSON.stringify({
    destination: "NORTH 30TH ST",
    miles: 14
  });
  response.end(json);
})

router.addRoute("GET /audio", (req, res, params) => {
    let file = __dirname + '/views/audio.html'
    res.writeHead(200, {"Content-Type": "text/html"});
    console.log("file" + file)
    fs.createReadStream(file).pipe(res);
});

var server = http.createServer(function (req, res) {
 var match = router.match(req.method + ' ' + req.url);
 if (match) match.fn(req, res, match.params);
 else {
  res.statusCode = 404;
  res.end('not found\n');
 }
});

server.listen(8000);

console.log("Server running at http://127.0.0.1:8000/");
