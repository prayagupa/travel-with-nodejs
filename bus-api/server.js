var Express = require('Express');
var app = Express();
var Filesystem = require('fs');
var Formidable = require("formidable");
var https = require('https');
var Database = require('./database')
var Util = require('./util')
var MongoClient = require('mongodb').MongoClient
const crypto = require('crypto');
const decipher = crypto.createDecipher('aes256', 'asaadsaad');

app.set('json spaces', 40)
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.send('Hello Easy Bus!');
});

app.get('/buses', (req, res) => {
    var syncJson = JSON.parse(Filesystem.readFileSync('data.json', 'utf8'));
    res.render('buses', {"buses": syncJson})
});


app.get('/message', (req, res) => {
    res.render('bus_message')
});

app.post('/message', (req, res) => {
    var message = new Formidable.IncomingForm()
    message.parse(req, (err, fields, files) => {
        Database.insertMessage(fields)
        MongoClient.connect("mongodb://localhost:27017/easyride", function (err, db) {
            db.collection("Messages").findOne({}, (error, data) => {
                var decrypted = decipher.update(data.message, 'hex', 'utf8');
                decrypted += decipher.final('utf8');
                console.log(decrypted);

                res.render("bus_message", {message: decrypted})
            })
        })
    })
});

app.get('/image', (req, res) => {
    Util.download('https://lastfm-img2.akamaized.net/i/u/64s/15cc734fb0e045e3baac02674d2092d6.png', 'porcupine.png',
        ()=> {
            console.log("downloaded to porcupine.png")
            res.sendFile(__dirname + '/porcupine.png');
        })
})

app.get('/contactus', (req, res) => {
    res.render('contactus')
});

app.post('/contactus', (req, res) => {
    var contactUs = new Formidable.IncomingForm()
    contactUs.parse(req, (err, fields, files) => {
        var validation = !fields.fullName || !fields.email || !fields.message
        if (validation) {
            res.render('contactus', {"message": "Sorry sir, you need to fill in the form with non empty message."})
            res.end()
        } else {
            Database.insert_data(fields)
            res.render('contactus', {"message": fields.fullName + ", Thanks for providing the suggestion."})
        }
    })
})

app.listen(3000, function () {
    console.log('Bus app listening on port 3000!');
});

