
var filesystem = require('fs');
var stats = filesystem.statSync("busstops.json")


var json = {
     "busstops.json" : {
        "size" : stats["size"]
     }
}

var syncJson = filesystem.readFileSync('busstops.json', 'utf8');

console.log(json)
