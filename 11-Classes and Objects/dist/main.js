"use strict";
/************** Class in Typescript **********************/
class User {
    constructor(email, name) {
        this.city = "";
        this.email = email;
        this.name = name;
    }
}
const arun = new User("arun@aj.com", "arun");
// arun.city = "Rohtak";  => not allowed
