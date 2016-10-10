var filesystem = require('fs');

var DbClient = require('mongodb').MongoClient
var DbServer = require('mongodb').Server

var dbClient = new DbClient(new DbServer("localhost", 27017))
//var db = dbClient.db('easy-ride')


module.exports = {
   insert : function insert(data) {
             filesystem.appendFile("/var/log/atom", data, function(err) {
                 if(err) {
                    return console.log(err);
                 }
                 console.log("The data is saved to database!");
           })
 
   } 
}
