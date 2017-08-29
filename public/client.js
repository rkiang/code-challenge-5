console.log('client.js is loaded');

var app = angular.module('MessageApp', []);

app.controller('MessageController', ['$http', function ($http) {
    console.log('Message Controller has been loaded');
    var self = this;
    self.messages = {list:[]};

    self.getMessages = function () {
        $http.get('/message').then(function (response) {
            // console.log(response);
            // console.log(response.data);
            self.messages = response.data;
        });
    };

    self.addMessages = function(newMessage) {
        // console.log('add message button was clicked', newMessage);
        $http.post('/message', newMessage).then(function(response) {    
        });
        self.getMessages();
    };
    self.getMessages();
}]);

