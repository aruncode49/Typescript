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

// readonly & optional

type User = {
  readonly _id: string; // nobody can touch this _id
  name: string;
  email: string;
  isAdmin: boolean;
  creditCardNumber?: number; // this field is optional, if we don't provide creditCardNumber typescript will not give any error
};

let myUser: User = {
  _id: "123456",
  name: "",
  email: "",
  isAdmin: false,
};

myUser.name = "abc";
myUser.email = "abc@gmail.com";
// myUser._id = "abc@123"  // error because of read only property

// Qs: If id is an array and we applied readonly then on push method, it gives error or not?

type testObj = {
  readonly id: string[];
};

let testId: testObj = { id: ["a", "b", "c"] };

// now these are mutable and no error occured!!
testId.id.push("abc");
testId.id.pop();
testId.id.pop();

// realy usecase of type alias (develop new type from previous types)
type CardNumber = number;
type CardDate = string;

// developing new type from previous types
type CardDetails = CardDate | CardNumber | { cvv: number };
