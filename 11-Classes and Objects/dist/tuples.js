"use strict";
// Tuple => fix position of types and fix length
const user = ["arun", 49];
user[1] = 12;
// user.push(true) // not allowed, which is as expected
user.push(21); //allowed, TS compiler should prevent it
const secureUser = ["arun", 49];
// secureUser[0] = "xxxx"; not allowed
// secureUser.push("..") not allowed
