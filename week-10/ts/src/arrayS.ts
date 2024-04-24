// run below command to run a specfic file
// tsc --outDir dist1 --module CommonJS arrayS.ts

const numbers = [1, 2, 3, 4, 5, 6];

const even = (numbers: number[]) => {
  numbers.forEach((number) => {
    if (number % 2 === 0) {
      console.log(number);
    }
  });
};

even(numbers);

const users = [
  {
    name: "jack",
    age: 12,
  },
  {
    name: "oggey",
    age: 10,
  },
];

interface User {
  name: string;
  age: number;
}

const legal = (users: User[]) => {
  return users.filter((user) => user.age > 10);
};

console.log(legal(users)); // Output: true
