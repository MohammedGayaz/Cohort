// types
type newUser = {
  userId: StringorNumber;
  firstname: string;
  lastname: string;
  bankBalance: number;
};

type StringorNumber = string | number;

const man = {
  userId: 12,
  firstname: "jack",
  lastname: "john",
  bankBalance: 100,
};

const isRich = (man: newUser) => {
  return true ? man.bankBalance > 50 : false;
};

console.log(isRich(man) ? "i am rich" : "well i am broke");

type Emp = {
  name: string;
  age: number;
};

type Mang = {
  name: string;
  age: number;
  startDate: Date;
};

type Admin = Emp & Mang;

const admin: Admin = {
  name: "oggey",
  age: 12,
  startDate: new Date(),
};
