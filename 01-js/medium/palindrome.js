/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {

  var lowerStr = str.toLowerCase().replace(/[^a-z]/g, '');

  for(var i=0;i<lowerStr.length/2;i++){
    if(lowerStr[i] !== lowerStr[lowerStr.length-i-1]) return false;
  }

  return true;
}

module.exports = isPalindrome;