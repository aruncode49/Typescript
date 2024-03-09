// Tuple => fix position of types and fix length

type User = [string, number]; // tuple type

const user: User = ["arun", 49];

user[1] = 12;
// user.push(true) // not allowed, which is as expected
user.push(21); //allowed, TS compiler should prevent it

// Solution: Apply Readonly if you don't want mutable behaviour

type SecureUser = readonly [string, number];

const secureUser: SecureUser = ["arun", 49];

// secureUser[0] = "xxxx"; not allowed
// secureUser.push("..") not allowed
