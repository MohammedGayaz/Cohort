/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  const punctuationless = str.replace(/[^a-zA-Z0-9]/g,"");
  const finalString = punctuationless.replace(/\s/g,"").toLowerCase();

  let output = "";
  for(let i = finalString.length - 1; i >=0; i--){
    output += finalString[i]
  }

  if (finalString === output){
    return true;
  }
  return false;
}

//possible solution check front and back elements without reversing the array.

module.exports = isPalindrome;
