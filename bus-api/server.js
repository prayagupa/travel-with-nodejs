var express = require('express');
var app = express();
var filesystem = require('fs');
var formidable = require("formidable");

app.set('json spaces', 40)
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.send('Hello Easy Bus!');
});

app.get('/buses', (req, res) => {
  var syncJson = JSON.parse(filesystem.readFileSync('data.json', 'utf8'));
  res.render('buses', {"buses" : syncJson})
});

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
           //write to datastore
           filesystem.appendFile("/var/log/atom", JSON.stringify(fields), function(err) {
                 if(err) {
                    return console.log(err);
                 }
                 console.log("The data is saved to database!");
           })
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

