const User = {
  name: "akshay",
  email: "akshay@kumar.dev",
  isAdmin: true,
};

function createUser({
  name,
  email,
  isAdmin,
}: {
  name: string;
  email: string;
  isAdmin: boolean;
}): object {
  return {};
}

createUser({ name: "akshay", email: "akshay@kumar.dev", isAdmin: true });

let newUser = { name: "", email: "", isAdmin: true, userId: "" };

// createUser({name: "", email: "", isAdmin: true, userId: ""}) -> error because of userId is not exist

createUser(newUser); // this is the nonsense behaviour of objects in typescript

// return object with specific keys
function createCourse(): { courseName: string; price: number } {
  return { courseName: "react js", price: 3999 };
}
