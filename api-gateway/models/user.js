/*
============================================
; Title:  user.js
; Author: David Tarvin
; Date:   15 May 2019
; Description: part of api-gateway
;===========================================
*/

/**
 * Fields username, password, and email
 */

var mongoose = require("mongoose");
var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
});
var User = module.exports = mongoose.model("User", userSchema);

// user.save is used to add a new user in our database
module.exports.add = (user, callback) => {
    user.save(callback);
};

module.exports.getById = (id, callback) => {
    var query = {_id: id};
    User.findById(query, callback);
};


/**
 * Database queries
 */