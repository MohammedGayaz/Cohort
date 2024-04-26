// simple variable
const x: number = 12;
console.log(x);

// simple function
function greet(name: string) {
  console.log(`hello ${name}`);
}

greet("Joey");

const concat = (num1: number, num2: string) => {
  return num1 + num2;
};

console.log(concat(10, "12"));

export default concat;
