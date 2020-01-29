function findLongestSubstring(str) {
  let seen = {};
  let max = 0;
  let first = 0;
  if (str.length < 2) return str.length;
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (!(letter in seen)) {
      seen[letter] = 1;
    } else {
      seen[letter]++;
    }

    while (seen[letter] > 1) {
      seen[str[first]]--;
      first++;
    }
    max = Math.max(i - first + 1, max);
  }
  return max;
}

console.log(findLongestSubstring("abcabcbb") === 3);
console.log(findLongestSubstring("bbbbbb") === 1);
console.log(findLongestSubstring("pwwkew") === 3);
console.log(findLongestSubstring("longestsubstring") === 8);
