var express = require('express');

var app = express();

var port = 5000;

app.listen(port, function(){
    console.log('Listening to port', port);
});