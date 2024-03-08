function addTwo(num: number) {
  return num + 2;
}

function getUpper(val: string) {
  return val.toUpperCase();
}

// addTwo("4")  // error
addTwo(4);

// getUpper(344)   // error
getUpper("hello");

function signUpUser(name: string, email: string, isAdmin: boolean) {}

signUpUser("hello", "hello@gmail.com", true);

// default params
function loginUser(name: string, email: string, isAdmin?: string) {
  if (typeof isAdmin !== "undefined") {
    // ....
  } else {
    // ....
  }
}

loginUser("abc", "abc@gmail.com");

// Some better practice to use functions in typescript

function consoleErrors(errMsg: string): void {
  console.log(errMsg);
}

const fruits = ["apple", "banana", "grapes", "oranges"];

// we want to return string[] only from map fn.
fruits.map((fruit, index): string => {
  return `${index + 1} :: ${fruit}`;
});

// never -> type
// some functions never return a value :: similar to void (but different)

function handleError(errMsg: string): never {
  throw new Error(errMsg); // intentionaly crashed our project

  // ..... sometimes stuck into infinite loop
}
