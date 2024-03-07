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
