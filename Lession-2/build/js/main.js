"use strict";
// Arrays
let stringArr = ["a", "b", "c"]; // string[]
let numAndStringArr = [1, "a", "b"]; // (number | string)[]
let mixedArr = [1, "a", true]; // (number | string | boolean)[]
let test = []; // any[]
let bands = [];
// Tuple (for more strictness) => for specific length and position for their desired data types
let myTuple = ["hello", 12, true];
// Objects
let myObj;
myObj = [];
console.log(typeof myObj); // object
let exampleObj = {
    name: "abc",
    age: 12,
};
exampleObj.name = "xyz";
let AJ = {
    name: "arun",
    age: 22,
    subjects: ["math", "english", "physics"],
};
let AM = {
    name: "amresh",
    age: 22,
    isStudent: true,
    subjects: ["math", "english", "physics"],
};
AJ = AM; // fine
AM = AJ; // fine
let ojas = {
    // name: "ojas",
    age: 22,
};
const greetPerson = (person) => {
    if (person.name)
        return `Hello ${person.name.toUpperCase()}`;
    return "Hello";
};
console.log(greetPerson(ojas));
// ENUM
// Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript.
// Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.
var Grade;
(function (Grade) {
    Grade[Grade["A"] = 10] = "A";
    Grade[Grade["B"] = 11] = "B";
    Grade[Grade["C"] = 12] = "C";
    Grade[Grade["D"] = 13] = "D";
    Grade[Grade["E"] = 14] = "E";
})(Grade || (Grade = {}));
console.log(Grade.A, Grade.E);
