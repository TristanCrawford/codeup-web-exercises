"use strict";

var username = 'codeup';
var password = 'notastrongpassword';

var usernameLengthReq = username.length < 20;
var usernameContainsWhitespace = username.includes("\ ");
var passwordLengthReq = password.length > 5;
var passwordContainsUsername = password.includes(username);
var passwordContainsWhitespace = password.includes("\ ");

console.group("Username and Password Requirements");
console.log(usernameLengthReq, usernameContainsWhitespace, passwordLengthReq, passwordContainsUsername, passwordContainsWhitespace);
console.groupEnd();
