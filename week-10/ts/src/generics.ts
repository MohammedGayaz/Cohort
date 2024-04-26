const returnOne = <T>(arr: T[]) => {
  return arr[0];
};

const intOutput = returnOne([1, 2, 3, 4, 5]);
const strOutput = returnOne(["hi", "hello", "hola"]);

console.log(intOutput);
console.log(strOutput);
