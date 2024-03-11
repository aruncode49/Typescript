"use strict";
/************** Classes in Typescript **********************/
// class User {
//   public email: string;
//   private name: string; // only accessible with in the class (# in js for private eg: #name)
//   readonly city: string = "";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
// other way
class User {
    constructor(email, name // public userId: string
    ) {
        this.email = email;
        this.name = name;
        this._courseCount = 1; // default value, can't access and manipulate outside the class, we need getter and setter for that!
        this._userId = 2; // only accessible within the class and other class which inherit that User class
        this.city = "";
    }
    get getGoogleEmail() {
        return `google${this.email},`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isSubUser = true;
    }
    changeUserId() {
        this._userId = 5;
    }
}
const arun = new User("arun@aj.com", "arun");
const city = arun.city; // we can access it but can't modify it
// getter
const courseCount = arun.courseCount;
// setter
arun.courseCount = 5;
// NOTE :: no open parenthesis required for using getter and setter
