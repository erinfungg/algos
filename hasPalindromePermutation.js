function hasPalindromePermutation(theString) {
  let chars = {};
  let odd = 0;
  for (let letter of theString) {
    if (!chars[letter]) chars[letter] = 1;
    else chars[letter]++;
  }
  for (let key in chars) {
    if (chars[key] % 2 !== 0) odd++;
  }

  if (odd <= 1) return true;
  return false;
}

console.log(hasPalindromePermutation("civic") === true);
console.log(hasPalindromePermutation("abcabd") === false);
console.log(hasPalindromePermutation("aabbccd") === true);
