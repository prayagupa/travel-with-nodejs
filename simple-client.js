var http = require('http')

var req = {
  protocal: "https:",
  hostname: "jsonplaceholder.typicode.com",
  path: "/posts",
  method: "POST",
  json: true,
  headers: {
	    "User-Agent": "Chrome/59.0.3071.115",
	    "content-type": "application/json", 
	    "X-APP-VERSION": "1.0", 
	    "X-PLATFORM": "pc"},
  body: JSON.stringify({"userName": "prayagupd@updprayag.com"})
};

var body='';

var request = http.request(req, function(response) {
    response.on('data', function (chunk) {
        body += chunk;
    });
    response.on('end',function() {
        console.log(body);
    });

request.on('error', function(err) {
    console.log("error")
});

});

request.end();
