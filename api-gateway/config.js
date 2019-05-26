/*
============================================
; Title:  config.js
; Author: David Tarvin
; Date:   15 May 2019
; Description: part of api-gateway
;===========================================
*/

// display header at beginning of program
// const header = require('/Tarvin-header.js');
// console.log(header.display("David", "Tarvin", "API Gateway config.js"));
// console.log("");


var config = {};
config.web = {};
config.web.secret = 'topsecret';
config.web.port = process.env.PORT || '3000';
module.exports = config;