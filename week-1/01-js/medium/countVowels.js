/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let vowelsCount = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const cleanWord = str.replace(/\s/g, '').toLowerCase();
  for (let i = 0; i < cleanWord.length; i++) {
    if (vowels.includes(cleanWord[i])) {
      vowelsCount++;
    }
  }

  return vowelsCount;
}

module.exports = countVowels;