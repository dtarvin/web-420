/*
============================================
; Title:  user.js
; Author: David Tarvin
; Date:   15 May 2019
; Description: part of api-gateway
;===========================================
*/

// display header at beginning of program
const header = require('../Tarvin-header.js');
console.log(header.display("David", "Tarvin", "API Gateway user.js"));
console.log("");

/**
 * Fields username, password, and email
 */

var mongoose = require("mongoose");
var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
});
module.exports = mongoose.model("User", userSchema);

/**
 * Database queries
 */