// npm packages that we'll use
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// setup express config
var app = express();
var PORT = process.env.PORT || 8080;

// using bodyParser makes it easy for our server to interpret the data sent to it
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:application/vnd.api+json}));

// this points our server to a 2 "route" files that give our server a "map" of how to respond to the user.
require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

// this "stsrts" our seerver
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
})