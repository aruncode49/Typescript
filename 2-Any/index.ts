let num; // type: any

function getNumber() {
  return 34;
}

num = getNumber(); // now num is any type means there is not any type check on that.

// NOTE: use of any type in your code, is not suggested as a good practice.

let data: string;

// suppose an api call happen in a function
function fetchData() {
  // api call
  return "data";
}

data = fetchData(); // that string type always ask for string data only
