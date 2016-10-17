var filesystem = require('fs');
var assert = require('assert');

var MongoClient = require('mongodb').MongoClient
var Server = require('mongodb').Server
var Db = require('mongodb').Db

var mongoClient = new MongoClient(new Server("localhost", 27017))

module.exports = {
    insert: function insert(data) {
        filesystem.appendFile("/var/log/atom", data, function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("The data is saved to Database!");
        })

    },
    insert_data: function insert_data(document) {
        MongoClient.connect("mongodb://172.17.0.1:27017/easyride", function (err, db) {
            assert.equal(null, err)
            db.collection("Feedback").insertOne(document)
            console.log(db.collection("Feedback").findOne())
            db.close()
        })
    },
    insertMessage: function insert_data(document) {
        MongoClient.connect("mongodb://localhost:27017/easyride", function (err, db) {
            assert.equal(null, err)
            db.collection("Messages").insertOne(document)
            db.close()
        })
    }
}
