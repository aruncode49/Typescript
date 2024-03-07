"use strict";
// // Type Aliases
// type stringOrNumber = string | number;
// type stringOrNumberArray = (string | number)[];
// type CricketPlayer = {
//   name?: string;
//   active: boolean;
//   bestScores: stringOrNumberArray;
// };
// type UserId = stringOrNumber;
// // Literal Types
// let myName: "Arun";
// let userName: "Arun" | "Amresh" | "Ojas";
// // userName = "XYZ" // ERROR
// // Functions
// function add(a: number, b: number): number {
//   return a + b;
// }
// function printMsg(msg: any) {
//   console.log(msg);
// }
// printMsg("Hello"); // Hello
// printMsg(add(2, 3)); // 5
// type mathFunction = (a: number, b: number) => number; // this function type definition only work with Arrow functions
// const multiply: mathFunction = (a, b) => {
//   return a * b;
// };
// // optional parameters
// function addAll(a: number, b: number, c?: number): number {
//   if (typeof c !== "undefined") {
//     return a + b + c;
//   }
//   return a + b;
// }
// // default parameter
// function sumAll(a: number, b: number, c: number = 2): number {
//   return a + b + c;
// }
// printMsg(addAll(2, 3, 2)); // 7
// printMsg(addAll(2, 3)); // 5
// printMsg(sumAll(2, 3)); // 7
// printMsg(sumAll(2, 3, 5)); // 10
// // NOTE:: type or interface function signatures can not work with default param
// //  Rest Parameters
// function total(...nums: number[]): number {
//   return nums.reduce((prev, curr) => prev + curr);
// }
// printMsg(total(1, 2, 3, 4, 5)); // 15
// printMsg(total(1, 2, 3)); // 6
// // never type
// const createError = (errMsg: string) => {
//   throw new Error(errMsg);
// };
// const infinite = () => {
//   let i: number = 1;
//   while (true) {
//     i++;
//     // resolving never type to void
//     if (i > 100) break;
//   }
// };
let firstName = "Arun";
firstName = 12;
console.log(firstName);
