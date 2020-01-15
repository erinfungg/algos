function validAnagram(str1, str2) {
  // add whatever parameters you deem necessary - good luck!
  if (str1.length !== str2.length) return false;

  let freq1 = {};
  let freq2 = {};

  for (let letter of str1) {
    freq1[letter] = (freq1[letter] || 0) + 1;
  }
  for (let letter of str2) {
    freq2[letter] = (freq2[letter] || 0) + 1;
  }
  for (let key in freq1) {
    if (!(key in freq2)) return false;
    if (freq1[key] !== freq2[key]) return false;
  }
  return true;
}

console.log(validAnagram("aaz", "zza") === false);
console.log(validAnagram("anagram", "nagaram") === true);
console.log(validAnagram("rat", "car") === false);
console.log(validAnagram("qwerty", "qeywrt") === true);
