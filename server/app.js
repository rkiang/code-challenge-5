var express = require('express');

var app = express();

var port = 5000;

app.use(express.static('public'));

var databaseUrl = 'mongodb://localhost:27017/codechallenge';
mongoose.connect(databaseUrl,
    {
        useMongoClient: true
    });

app.listen(port, function(){
    console.log('Listening to port', port);
});