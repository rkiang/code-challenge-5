var express = require('express');
var router = express.Router();
var sendMessage = require('../models/message.schema');

router.get('/', function (req, res) {
    
    // get our data
    sendMessage.find({}, function(err, data) {
        if (err) {
            console.log('Error found:', err);
            res.sendStatus(500);
        } else {
            console.log('Data: ', data);
            res.send(data);
        }
    });

});

router.post('/', function(req, res) {
    console.log('new message, router post', req.body);
    var newMessage = new sendMessage(req.body);
    newMessage.save(function(err, data) {
        if (err) {
            console.log('router post error: ', err);
            res.sendStatus(500);
        } else {
            console.log('router post data: ', data);
            res.sendStatus(201);
        }
    });

});

module.exports = router;