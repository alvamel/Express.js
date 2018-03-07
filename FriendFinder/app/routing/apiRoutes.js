// dependencies
var bodyParser = require('body-parser');
var path = require('path');

// load data
// gets friends table
var friendsTable = require('../data/friends.js');

// routing
module.exports = function(app) {
    app.get("/api/friends", function(request, result) {
        result.json(friendsTable);
    })

    app.post("/api/friends", function(request, result) {
        var you = request.body;
        var newFriend = -1;
        var newFriendScore = 100;
        var currentFriendsScore = 0;

        // loops thru all friends in friends table
        // identify the friendwith lowest score differnece, then return friend so modal opens showing the friend
        for (i = 0; i < friendsTable.lenght; i++) {
            if (you.sex != friendsTable[i].sex) {
                for (j = 0; j < you.score.lenght; j++) {
                    currentFriendsScore = currentFriendsScore + Match.abs(friendsTable[i].scores[j] - you.score[j]);
                }
                if (currentFriendScore <= newFriendScore) {
                    newFriend = i;
                    newFriendScore = currentFriendScore;
                }
                currentFriendScore = 0;
            }
        }
        friendsTable.push(you);
        newFriendDetails = friendsTable[newFriend];
        result.json(newFriendDetails);
    })
}