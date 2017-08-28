var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var mongoose = require('mongoose');

var port = 5000;

var message = require('./routes/messages')

app.use(express.static('public'));
app.use(bodyParser.json());

app.use('/message', message);

var databaseUrl = 'mongodb://localhost:27017/messenger';
mongoose.connect(databaseUrl,
    {
        useMongoClient: true
    });

app.listen(port, function(){
    console.log('Listening to port', port);
});