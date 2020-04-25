//Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

function longestPalindrome(s) {
  if (!s) return "";
  let start = 0;
  let end = 0;
  for (let i = 0; i < s.length; i++) {
    let len1 = findPalindrome(s, i, i);
    let len2 = findPalindrome(s, i, i + 1);
    let len = Math.max(len1, len2);
    if (len > end - start) {
      start = Math.ceil(i - (len - 1) / 2);
      end = Math.floor(i + len / 2);
    }
  }
  return s.substring(start, end + 1);
}

function findPalindrome(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return right - left - 1;
}

console.log(longestPalindrome("babad") === "aba");
console.log(longestPalindrome("cbbd") === "bb");
console.log(longestPalindrome("myracecar") === "racecar");
