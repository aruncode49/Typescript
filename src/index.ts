// ************************* Basic ***********************************

// // Basic primitive types = string, boolean, number

// // string
// let myName = "arun"; // implicitly infer to string type

// let fruit: string = "apple"; // explicitly infer to type string (but not a good practice when to initialize your variable)

// function getString() {
//   return "Helo";
// }

// myName = getString();

// // number
// let age = 18;
// let count: number = 30;

// // boolean
// let isLoading: boolean = true;
// isLoading = false;

// ********************************** Any Type ****************************

// let num; // type: any

// function getNumber() {
//   return 34;
// }

// num = getNumber(); // now num is any type means there is not any type check on that.

// // NOTE: use of any type in your code, is not suggested as a good practice.

// let data: string;

// // suppose an api call happen in a function
// function fetchData() {
//   // api call
//   return "data";
// }

// data = fetchData(); // that string type always ask for string data only

// ***********************  Type Alias **********************

// type User = {
//     name: string;
//     email: string;
//     isAdmin: boolean;
//   };

//   const user: User = {
//     name: "akshay",
//     email: "akshay@kumar.dev",
//     isAdmin: true,
//   };

//   // pretty usecase of type alias with objects

//   // function createUser({
//   //     name,
//   //     email,
//   //     isAdmin,
//   //   }: {
//   //     name: string;
//   //     email: string;
//   //     isAdmin: boolean;
//   //   }): object {
//   //     return {};
//   // }

//   function createUser(user: User): object {
//     user.name = "akshay";
//     user.email = "akshay@gmail.com";
//     user.isAdmin = true;
//     return user;
//   }

//   // readonly & optional

//   type User = {
//     readonly _id: string; // nobody can touch this _id
//     name: string;
//     email: string;
//     isAdmin: boolean;
//     creditCardNumber?: number; // this field is optional, if we don't provide creditCardNumber typescript will not give any error
//   };

//   let myUser: User = {
//     _id: "123456",
//     name: "",
//     email: "",
//     isAdmin: false,
//   };

//   myUser.name = "abc";
//   myUser.email = "abc@gmail.com";
//   // myUser._id = "abc@123"  // error because of read only property

//   // Qs: If id is an array and we applied readonly then on push method, it gives error or not?

//   type testObj = {
//     readonly id: string[];
//   };

//   let testId: testObj = { id: ["a", "b", "c"] };

//   // now these are mutable and no error occured!!
//   testId.id.push("abc");
//   testId.id.pop();
//   testId.id.pop();

//   // realy usecase of type alias (develop new type from previous types)
//   type CardNumber = number;
//   type CardDate = string;

//   // developing new type from previous types
//   type CardDetails = CardDate | CardNumber | { cvv: number };

// *********************** Union Type ******************

// let score: string | number;

// score = 55;
// score = "55";

// // union => assigning two or more types

// type User = {
//   name: string;
//   id: number;
// };

// type Admin = {
//   username: string;
//   id: number;
// };

// let ABC: User | Admin = { name: "abc", id: 2 };

// ABC = { username: "admin abc", id: 2 };

// // union with functions
// // function getId(id: number | string): void{
// //     console.log(`DB ID is :: ${id}`);
// // }

// // getId(51341)
// // getId("51245343")

// function getId(id: string | number): string | number {
//   if (typeof id === "string") return id.toLowerCase();
//   return id + 5;
// }

// // union with arrays
// const data1: number[] = [1, 2, 3];
// const data2: (number | string)[] = [1, 2, "abc", "xyz"];
// const data3: (number | string | boolean)[] = [1, "abc", true];

// let positions: "top" | "middle" | "bottom";
// positions = "bottom";
// positions = "top";
// // positions = "abc" => error

// ****************************** Arrays ************************************

// const fruits: string[] = [];
// const superHeros: Array<string> = [];

// fruits.push("apple");
// fruits.push("banana");

// type User = {
//   name: string;
//   isAdmin: boolean;
// };

// const allUsers: User[] = [
//   {
//     name: "abc",
//     isAdmin: true,
//   },
// ];

// allUsers.push({
//   name: "xyz",
//   isAdmin: false,
// });

// // we can define type for two dimensional array also
// let mlModel: number[][] = [];

// mlModel.push([1]);
// mlModel.push([2]);
// mlModel.push([3]);

// ********************************* Objects ************************

// const User = {
//     name: "akshay",
//     email: "akshay@kumar.dev",
//     isAdmin: true,
//   };

//   function createUser({
//     name,
//     email,
//     isAdmin,
//   }: {
//     name: string;
//     email: string;
//     isAdmin: boolean;
//   }): object {
//     return {};
//   }

//   createUser({ name: "akshay", email: "akshay@kumar.dev", isAdmin: true });

//   let newUser = { name: "", email: "", isAdmin: true, userId: "" };

//   // createUser({name: "", email: "", isAdmin: true, userId: ""}) -> error because of userId is not exist

//   createUser(newUser); // this is the nonsense behaviour of objects in typescript

//   // return object with specific keys
//   function createCourse(): { courseName: string; price: number } {
//     return { courseName: "react js", price: 3999 };
//   }

// ********************************* Tuples ************************

// Tuple => fix position of types and fix length

// type User = [string, number]; // tuple type

// const user: User = ["arun", 49];

// user[1] = 12;
// // user.push(true) // not allowed, which is as expected
// user.push(21); //allowed, TS compiler should prevent it

// // Solution: Apply Readonly if you don't want mutable behaviour

// type SecureUser = readonly [string, number];

// const secureUser: SecureUser = ["arun", 49];

// secureUser[0] = "xxxx"; not allowed
// secureUser.push("..") not allowed

// ********************************* Enums ************************

// enum Position {
//     First = 1,
//     Second,
//     Third,
//     Fourth = 10,
//   }

//   const ajPosition = Position.First;
//   const amPositoin = Position.Fourth;

// ******************************** Function *****************************

// function addTwo(num: number) {
//     return num + 2;
//   }

//   function getUpper(val: string) {
//     return val.toUpperCase();
//   }

//   // addTwo("4")  // error
//   addTwo(4);

//   // getUpper(344)   // error
//   getUpper("hello");

//   function signUpUser(name: string, email: string, isAdmin: boolean) {}

//   signUpUser("hello", "hello@gmail.com", true);

//   // default params
//   function loginUser(name: string, email: string, isAdmin?: string) {
//     if (typeof isAdmin !== "undefined") {
//       // ....
//     } else {
//       // ....
//     }
//   }

//   loginUser("abc", "abc@gmail.com");

//   // Some better practice to use functions in typescript

//   function consoleErrors(errMsg: string): void {
//     console.log(errMsg);
//   }

//   const fruits = ["apple", "banana", "grapes", "oranges"];

//   // we want to return string[] only from map fn.
//   fruits.map((fruit, index): string => {
//     return `${index + 1} :: ${fruit}`;
//   });

//   // never -> type
//   // some functions never return a value :: similar to void (but different)

//   function handleError(errMsg: string): never {
//     throw new Error(errMsg); // intentionaly crashed our project

//     // ..... sometimes stuck into infinite loop
//   }

// ******************************** Interface *****************************

// interface User {
//     readonly dbId: number;
//     userId: number;
//     googleId?: string;
//     email: string;
//     // startTrial: () => string,
//     startTrial(): string; // personal choice
//     getCoupon(couponId: number): number;
//   }

//   // Q: Difference between type and interface:

//   // 1. We can reopen interface to add further more types
//   interface User {
//     githubToken: string;
//   }

//   // 2. interfaces can be inherit (extends)
//   interface Admin extends User {
//     role: "Admin" | "User" | "Manager" | "TA";
//   }

//   const user: Admin = {
//     email: "a@a.com",
//     userId: 123,
//     dbId: 123,
//     startTrial: () => {
//       return "should be string";
//     },
//     getCoupon(couponId) {
//       return 1234 + couponId;
//     },
//     githubToken: "githubtoken",
//     role: "Admin",
//   };

/********************************* Classes in Typescript **********************/

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
// class User {
//     private _courseCount = 1; // default value, can't access and manipulate outside the class, we need getter and setter for that!

//     protected _userId = 2; // only accessible within the class and other class which inherit that User class

//     readonly city: string = "";
//     constructor(
//       public email: string,
//       public name: string // public userId: string
//     ) {}

//     get getGoogleEmail(): string {
//       return `google${this.email},`;
//     }

//     get courseCount(): number {
//       return this._courseCount;
//     }

//     set courseCount(courseNum) {
//       this._courseCount = courseNum;
//     }
//   }

//   class SubUser extends User {
//     isSubUser: boolean = true;

//     changeUserId() {
//       this._userId = 5;
//     }
//   }

//   const arun = new User("arun@aj.com", "arun");
//   const city = arun.city; // we can access it but can't modify it

//   // getter
//   const courseCount = arun.courseCount;

//   // setter
//   arun.courseCount = 5;
// NOTE :: no open parenthesis required for using getter and setter

// ************************ Interface with Classes ***************************

// interface PersonInterface {
//   name: string;
//   age: number;
//   gender: string;
// }

// class Person implements PersonInterface {
//   constructor(public name: string, public age: number, public gender: string) {}
// }

// const arun = new Person("arun", 22, "male");
// arun.name, arun.gender;

// ************************ Type Assertion ***************************

// const btn = <HTMLElement> document.getElementById("btn");
// const btn =  document.getElementById("btn") as HTMLElement
// const btn =  document.getElementById("btn")!; // ! means absolutely not null

// btn.addEventListener("click", () => {});
// btn?.addEventListener("click", () => {});   // const btn = document.getElementById("btn");

// type Person = {
//   // [key: string]: string;  // Dynamic Property
//   name: string;
//   email: string;
// };

// const obj: Person = {
//   name: "Arun",
//   email: "arun@gmail.com",
// };

// const getData = (key: keyof Person): string => {
//   return obj[key];
// };

// getData("name");

// ************************ Utility Types ***************************

// 1. Partial Type

// type User = {
//   name: string,
//   email: string,
// }

// type User2 = Partial<User>  // optional

// 2. Required Type => opposite of partial

// type User = {
//   name?: string;
//   email?: string;
// };

// type User2 = Required<User>  // all required

// 3. Readonly

// ************************ Generics (Custom Type) ***************************

// const func = (n: any): any => {
//   return n;
// }

// const num = func(20);
// const str = func("abc");
// const bool = func(true);

// Note::: We know that we don't have to use any type

// use generic if you want to use multiple types at same time

// Generic => <T>
// const func = <T>(n: T): T => {
//   return n;
// };

// // this T can be any thing, like a,b, Custom, any what you want, but as per standart T is better;

// const num = func<number>(20);
// const str = func<string>("abc");
// const bool = func<boolean>(true);

// interface Person {
//   name: string;
//   age: number;
// }

// const person: Person = {
//   name: "Arun",
//   age: 100,
// };

// const ans = func<Person>(person);
// ans.age;
// ans.name;
