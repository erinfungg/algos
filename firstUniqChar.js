function firstUniqChar(s) {
  let freq = {};
  for (let i = 0; i < s.length; i++) {
    if (!freq[s[i]]) freq[s[i]] = [1, i];
    else freq[s[i]][0]++;
  }
  for (let letter in freq) {
    if (freq[letter][0] === 1) return freq[letter][1];
  }
  return -1;
}

console.log(firstUniqChar("leetcode") === 0);
console.log(firstUniqChar("fullstack") === 0);
console.log(firstUniqChar("loveleetcode") === 2);
console.log(firstUniqChar("aaaaabbbbbcccc") === -1);
