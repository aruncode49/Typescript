"use strict";
let score;
score = 55;
score = "55";
let ABC = { name: "abc", id: 2 };
ABC = { username: "admin abc", id: 2 };
// union with functions
// function getId(id: number | string): void{
//     console.log(`DB ID is :: ${id}`);
// }
// getId(51341)
// getId("51245343")
function getId(id) {
    if (typeof id === "string")
        return id.toLowerCase();
    return id + 5;
}
// union with arrays
const data1 = [1, 2, 3];
const data2 = [1, 2, "abc", "xyz"];
const data3 = [1, "abc", true];
let positions;
positions = "bottom";
positions = "top";
// positions = "abc" => error
