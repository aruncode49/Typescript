type User = {
  name: string;
  email: string;
  isAdmin: boolean;
};

const user: User = {
  name: "akshay",
  email: "akshay@kumar.dev",
  isAdmin: true,
};

// pretty usecase of type alias with objects

// function createUser({
//     name,
//     email,
//     isAdmin,
//   }: {
//     name: string;
//     email: string;
//     isAdmin: boolean;
//   }): object {
//     return {};
// }

function createUser(user: User): object {
  user.name = "akshay";
  user.email = "akshay@gmail.com";
  user.isAdmin = true;
  return user;
}
