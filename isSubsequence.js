function isSubsequence(str1, str2) {
  let subpoint = 0;
  for (let i = 0; i < str2.length; i++) {
    if (str2[i] === str1[subpoint]) subpoint++;
    if (subpoint === str1.length) return true;
  }
  return false;
}

console.log(isSubsequence("hello", "hello world") === true);
console.log(isSubsequence("sing", "sting") === true);
console.log(isSubsequence("abc", "abracadabra") === true);
console.log(isSubsequence("abc", "acb") === false);
