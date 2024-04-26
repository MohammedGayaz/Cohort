import { Employee, Manager } from "./person";
// interfaces
const isLegal = (user: User) => {
  return true ? user.age >= 18 : false;
};

interface User {
  name: string;
  age: number;
  address: string;
}

const user = {
  name: "Joey",
  age: 20,
  address: "123 Main St",
};

console.log(isLegal(user));

// classed implementing interfaces
const emp1 = new Employee("jack", 12);
const mag1 = new Manager("Oggey", 10, true);

emp1.greet("hello jack");
mag1.greet("hello oggey");
