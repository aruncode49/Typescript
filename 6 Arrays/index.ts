const fruits: string[] = [];
const superHeros: Array<string> = [];

fruits.push("apple");
fruits.push("banana");

type User = {
  name: string;
  isAdmin: boolean;
};

const allUsers: User[] = [
  {
    name: "abc",
    isAdmin: true,
  },
];

allUsers.push({
  name: "xyz",
  isAdmin: false,
});

// we can define type for two dimensional array also
let mlModel: number[][] = [];

mlModel.push([1]);
mlModel.push([2]);
mlModel.push([3]);
