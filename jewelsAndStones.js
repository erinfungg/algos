/*
You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".
*/

function numJewelsInStones(J, S) {
  let jewels = {};
  for (let j of J) {
    jewels[j] = 0;
  }
  for (let i = 0; i < S.length; i++) {
    if (S[i] in jewels) jewels[S[i]]++;
  }
  return Object.values(jewels).reduce((acc, curr) => {
    return acc + curr;
  }, 0);
}

console.log(numJewelsInStones("aA", "aAAbbbb") === 3);
console.log(numJewelsInStones("z", "ZZ") === 0);
console.log(numJewelsInStones("bcd", "aabBCdd") === 3);
