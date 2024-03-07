"use strict";
// Literal Types
let myName;
let userName;
// userName = "XYZ" // ERROR
// Functions
function add(a, b) {
    return a + b;
}
function printMsg(msg) {
    console.log(msg);
}
printMsg("Hello"); // Hello
printMsg(add(2, 3)); // 5
const multiply = (a, b) => {
    return a * b;
};
// optional parameters
function addAll(a, b, c) {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
}
// default parameter
function sumAll(a, b, c = 2) {
    return a + b + c;
}
printMsg(addAll(2, 3, 2)); // 7
printMsg(addAll(2, 3)); // 5
printMsg(sumAll(2, 3)); // 7
printMsg(sumAll(2, 3, 5)); // 10
// NOTE:: type or interface function signatures can not work with default param
//  Rest Parameters
function total(...nums) {
    return nums.reduce((prev, curr) => prev + curr);
}
printMsg(total(1, 2, 3, 4, 5)); // 15
printMsg(total(1, 2, 3)); // 6
// never type
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        // resolving never type to void
        if (i > 100)
            break;
    }
};
