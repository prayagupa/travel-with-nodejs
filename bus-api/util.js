var Filesystem = require('fs');
var https = require('https');

module.exports = {

  download : function(url, dest, cb) {
   var file = Filesystem.createWriteStream(dest);
   var request = https.get(url, function(httpResponse) {
    httpResponse.pipe(file);
    file.on('finish', function() {
      console.log("piping to file finished")
      file.close(cb);  // close() is async, call cb after close completes.
    });
   }).on('error', function(err) { // Handle errors
    Filesystem.unlink(dest); // Delete the file async. (But we don't check the result)
    if (cb) cb(err.message);
   });
  }
}

var something = function(){
    Filesystem.readFile('data.json', 'utf8', (err, data) => {
        console.log(err + " " + data)
        if (err) throw err;
        json = JSON.parse(data);
    });
}