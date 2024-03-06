// Arrays

let stringArr = ["a", "b", "c"]; // string[]
let numAndStringArr = [1, "a", "b"]; // (number | string)[]
let mixedArr = [1, "a", true]; // (number | string | boolean)[]

let test = []; // any[]
let bands: string[] = [];

// Tuple (for more strictness) => for specific length and position for their desired data types
let myTuple: [string, number, boolean] = ["hello", 12, true];

// Objects

let myObj: object;
myObj = [];
console.log(typeof myObj); // object

let exampleObj = {
  name: "abc",
  age: 12,
};

exampleObj.name = "xyz";
// exampleObj.age "twelve"  => error

// explicitly annotation for objects
type Person = {
  name: string;
  age: number;
  isStudent?: boolean; // optional property
  subjects: string[];
};

let AJ: Person = {
  name: "arun",
  age: 22,
  subjects: ["math", "english", "physics"],
};

let AM: Person = {
  name: "amresh",
  age: 22,
  isStudent: true,
  subjects: ["math", "english", "physics"],
};

AJ = AM; // fine
AM = AJ; // fine
// AJ = exampleObj;  // error, because exampleObj is not type of Person

// Interface similar to types
interface Person2 {
  name?: string;
  age: number;
}

let ojas: Person2 = {
  // name: "ojas",
  age: 22,
};

const greetPerson = (person: Person2) => {
  if (person.name) return `Hello ${person.name.toUpperCase()}`;

  return "Hello";
};

console.log(greetPerson(ojas));

// ENUM
// Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript.

// Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.

enum Grade {
  A = 10, // 10
  B, // 11
  C, // 12
  D, // 13
  E, // 14
}

console.log(Grade.A, Grade.E);
