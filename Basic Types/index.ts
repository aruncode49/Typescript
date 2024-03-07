// Basic primitive types = string, boolean, number

// string
let myName = "arun"; // implicitly infer to string type

let fruit: string = "apple"; // explicitly infer to type string (but not a good practice when to initialize your variable)

function getString() {
  return "Helo";
}

myName = getString();

// number
let age = 18;
let count: number = 30;

// boolean
let isLoading: boolean = true;
isLoading = false;
