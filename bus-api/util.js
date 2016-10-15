
module.exports = {

  download : function(url, dest, cb) {
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
  }
}
