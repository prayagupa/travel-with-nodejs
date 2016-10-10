var express = require('express');
var app = express();
var filesystem = require('fs');
var formidable = require("formidable");
var https = require('https');
var database = require('./database')

app.set('json spaces', 40)
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.send('Hello Easy Bus!');
});

app.get('/buses', (req, res) => {
  var syncJson = JSON.parse(filesystem.readFileSync('data.json', 'utf8'));
  res.render('buses', {"buses" : syncJson})
});

var download = function(url, dest, cb) {
   var file = filesystem.createWriteStream(dest);
   var request = https.get(url, function(httpResponse) {
    httpResponse.pipe(file);
    file.on('finish', function() {
      console.log("piping to file finished")
      file.close(cb);  // close() is async, call cb after close completes.
    });
   }).on('error', function(err) { // Handle errors
    filesystem.unlink(dest); // Delete the file async. (But we don't check the result)
    if (cb) cb(err.message);
   });
};
 
app.get('/image', (req, res) => {
 download('https://lastfm-img2.akamaized.net/i/u/64s/15cc734fb0e045e3baac02674d2092d6.png', 'porcupine.png', function(){
   console.log("downloaded to porcupine.png") 
 })
})

app.get('/contactus', (req, res) => {
     res.render('contactus')
});

app.post('/contactus', (req, res) => {
     var contactUs = new formidable.IncomingForm()
     contactUs.parse(req, (err, fields, files) => {
         var validation = !fields.fullName || !fields.email || !fields.message
         if(validation) {
           res.render('contactus', {"message" : "Sorry sir, you need to fill in the form with non empty message."})
           res.end()
         } else {
          database.insert(JSON.stringify(fields))
          res.render('contactus', {"message" : fields.fullName + ", Thanks for providing the suggestion."})
         }
     })
})

var something = function(){
 filesystem.readFile('data.json', 'utf8', (err, data) => {
  console.log(err + " " + data)
  if (err) throw err;
  json = JSON.parse(data);
 });
}


app.listen(3000, function () {
  console.log('Bus app listening on port 3000!');
});

