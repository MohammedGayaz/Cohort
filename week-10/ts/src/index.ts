import concat from "./simple";

const delayCall = (fn: () => void) => {
  setTimeout(fn, 1000);
};

delayCall(() => {
  console.log(concat(10, "10"));
  console.log("delay function");
});

// enums

// generics

//imports and exprts
