var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/add', function (req, res, next) {
    res.render('add', {});
});

router.post('/add', function (req, res, next) {
    MongoClient.connect('mongodb://127.0.0.1:27017/zomato', function (err, db) {
        if (err) throw err;

        var item = {
            name: req.body.name,
            category: req.body.category,
            coord: [parseFloat(req.body.long), parseFloat(req.body.lat)]
        };

        db.collection('restaurants').insertOne(item, function (err, result) {
            if (err) throw err;
            console.log(result);
        });

        db.close();
        res.end('OK');
    });
});

router.get('/search', function (req, res, next) {
    res.render('search', {});
});

router.post('/search', function (req, res, next) {
    MongoClient.connect('mongodb://127.0.0.1:27017/zomato', function (err, db) {
        if (err) throw err;

        var condition = {'$and': [{'coord': {'$near': [parseFloat(req.body.long), parseFloat(req.body.lat)]}},
            {'category': req.body.category}]};

        db.collection('restaurants').find(condition, {}, {limit: 3}).toArray(function (err, docs) {
            if (err) throw err;

            res.render('search', {items: docs});
            db.close();
        });
    });
});

module.exports = router;
