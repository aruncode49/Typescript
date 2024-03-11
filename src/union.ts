let score: string | number;

score = 55;
score = "55";

// union => assigning two or more types

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let ABC: User | Admin = { name: "abc", id: 2 };

ABC = { username: "admin abc", id: 2 };

// union with functions
// function getId(id: number | string): void{
//     console.log(`DB ID is :: ${id}`);
// }

// getId(51341)
// getId("51245343")

function getId(id: string | number): string | number {
  if (typeof id === "string") return id.toLowerCase();
  return id + 5;
}

// union with arrays
const data1: number[] = [1, 2, 3];
const data2: (number | string)[] = [1, 2, "abc", "xyz"];
const data3: (number | string | boolean)[] = [1, "abc", true];

let positions: "top" | "middle" | "bottom";
positions = "bottom";
positions = "top";
// positions = "abc" => error
