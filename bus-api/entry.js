var express = require('express');
var app = express();
var filesystem = require('fs');

app.set('json spaces', 40)
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.send('Hello Bus!');
});

app.get('/buses', function (req, res) {

var syncJson = JSON.parse(filesystem.readFileSync('data.json', 'utf8'));

var json;
filesystem.readFile('data.json', 'utf8', (err, data) => {
  console.log(err + " " + data)
  if (err) throw err;
  json = JSON.parse(data);
});

var jsonString = JSON.stringify(json)
console.log("json " + JSON.stringify(json))

  res.json(syncJson);
});


app.listen(3000, function () {
  console.log('Bus app listening on port 3000!');
});

