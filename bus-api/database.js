var filesystem = require('fs');
var assert = require('assert');

var MongoClient = require('mongodb').MongoClient
var Server = require('mongodb').Server
var Db = require('mongodb').Db

var mongoClient = new MongoClient(new Server("localhost", 27017))

module.exports = {
   insert : function insert(data) {
             filesystem.appendFile("/var/log/atom", data, function(err) {
                 if(err) {
                    return console.log(err);
                 }
                 console.log("The data is saved to database!");
           })
 
   },
  
   insert_data : function insert_data(document) {
                //mongoClient.open(function(err, mongoClient) {
                  // var db = mongoClient.db('easy-ride')
                   //db.collection("Feedback").insertOne(document)
                MongoClient.connect("mongodb://localhost:27017/easy-ride", function(err, db){
                  assert.equal(null, err);
                  console.log("-- " + err);
                  db.collection("Feedback").insertOne(document)
                })
                //})
   }
}
