/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  str=str.toLowerCase();
  let orig="";
  let ans="";
  for(let i=0;i<str.length;i++){
    if(str[i]!=' ')
      orig=orig+str[i];
  }

  for(let i=str.length-1;i>=0;i--){
    if(str[i]!=' ')
      ans=ans+str[i];
  }
  for(let i=0;i<orig.length;i++){
    if(orig[i]!=ans[i]){
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
