"use strict";
const user = {
    name: "akshay",
    email: "akshay@kumar.dev",
    isAdmin: true,
};
// pretty usecase of type alias with objects
// function createUser({
//     name,
//     email,
//     isAdmin,
//   }: {
//     name: string;
//     email: string;
//     isAdmin: boolean;
//   }): object {
//     return {};
// }
function createUser(user) {
    user.name = "akshay";
    user.email = "akshay@gmail.com";
    user.isAdmin = true;
    return user;
}
let myUser = {
    _id: "123456",
    name: "",
    email: "",
    isAdmin: false,
};
myUser.name = "abc";
myUser.email = "abc@gmail.com";
let testId = { id: ["a", "b", "c"] };
// now these are mutable and no error occured!!
testId.id.push("abc");
testId.id.pop();
testId.id.pop();
