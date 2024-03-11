"use strict";
// Basic primitive types = string, boolean, number
// string
let myName = "arun"; // implicitly infer to string type
let fruit = "apple"; // explicitly infer to type string (but not a good practice when to initialize your variable)
function getString() {
    return "Helo";
}
myName = getString();
// number
let age = 18;
let count = 30;
// boolean
let isLoading = true;
isLoading = false;
