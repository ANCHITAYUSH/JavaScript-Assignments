/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    var count = 0;
    var lowerStr = str.toLowerCase();
    var vowels = ["a", "e", "i", "o", "u"];

    for(var i=0;i<lowerStr.length; i++){
      if(vowels.find(v => v === lowerStr[i])){
        count = count+1;
      }
    }

    return count;
}

module.exports = countVowels;