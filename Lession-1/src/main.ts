let myName: string = "arun";
let age: number = 22;
let isLoading: boolean = true;
let album: any; // string, number, boolean, etc.

let unionType: string | number; // union type
unionType = 12;
unionType = "string";

const sum = (a: number, b: string) => {
  return a + b;
};

// real use case of union type
let isActive: number | boolean; // 0,1 | true,false
let postId: number | string;

// reg exp
let regex: RegExp = /\w+/g;
