/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function letterCount(str){
  count = {}
  for (let char of str) {
		if (char !== " ") {
      if (count[char]){
        count[char]++;
      }
      else{
        count[char] = 1
      }
		}
	}
  return count;
}

function isAnagram(str1, str2) {
	if (str1.length !== str2.length) {
		return false;
	}

	// convert the strings to lower case to handle cases with irregularities in casing
	str1 = str1.toLowerCase();
	str2 = str2.toLowerCase();
	const Count1 = letterCount(str1)
	const Count2 = letterCount(str2)


	// now compare both the frequency maps
	for (let char in Count1) {
		if (Count2[char] !== Count1[char]) {
			return false;
		}
	}

	return true;
}

module.exports = isAnagram;