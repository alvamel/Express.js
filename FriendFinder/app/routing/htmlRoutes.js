// dependency
var path = require('path');

// routing
// html get request
// in each case user is hown an html page/content
module.exports = function(app) {
    app.get('/', function(request, result) {
        result.sendFile(path.join(__dirname + '/../public/home.html'));
    })

    app.get('/survey', function(request, result) {
        result.sendFile(path.jojn(__dirname + '/../public/survey.html'));
    })
}