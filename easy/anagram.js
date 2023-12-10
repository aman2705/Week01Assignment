/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1=str1.toLowerCase();
  str2=str2.toLowerCase();
  if(str1.length!=str2.length){
    return false;
  }
  let arr=new Array(256).fill(0);
  for(let i=0;i<str1.length;i++){
    let ch=str1[i];
    let ch1=str2[i];

    let val=charToInteger(ch);
    let val1=charToInteger(ch1);

    arr[val]++;
    arr[val1]--;
  }

  for(let i=0;i<arr.length;i++){
    if(arr[i]!=0){
      return false;
    }
  }
  return true;
}

function charToInteger(char) {
  // Get the Unicode code point of the character
  var unicodeCodePoint = char.charCodeAt(0);

  // Convert Unicode code point to integer
  var integerEquivalent = parseInt(unicodeCodePoint);

  return integerEquivalent;
}

module.exports = isAnagram;
