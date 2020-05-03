/*Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.*/

function canConstruct(ransomNote, magazine) {
  let letters = {};
  for (let char of magazine) {
    if (char in letters) letters[char]++;
    else letters[char] = 1;
  }
  for (let char of ransomNote) {
    if (!(char in letters) || letters[char] === 0) return false;
    else letters[char]--;
  }

  return true;
}

console.log(canConstruct("aa", "aab") === true);
console.log(canConstruct("a", "cb") === false);
