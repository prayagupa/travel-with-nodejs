var Stream = require('stream');
var Util = require('util');
var FS = require('fs');

function AddApplicationId(){
	    Stream.Transform.call(this);
	    this._readableState.objectMode = false;
	    this._writableState.objectMode = true;
}

Util.inherits(AddApplicationId, Stream.Transform);

AddApplicationId.prototype._transform = function(obj, encoding, cb){
	    obj.applicationId = "bus-app"
	    //console.dir(obj)
	    this.push(obj);
	    cb();
};

let startDate = new Date()
var inputStream = FS.createReadStream(__dirname + '/events.json')
var outputStream = __dirname + '/events_output.json'

inputStream.pipe(new AddApplicationId())
           .pipe(FS.createWriteStream(outputStream))

let endDate = new Date()

console.log("Time taken - " + (endDate.getTime() - startDate.getTime())+ " ms")
