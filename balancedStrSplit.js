/*
Balanced strings are those who have equal quantity of 'L' and 'R' characters.

Given a balanced string s split it in the maximum amount of balanced strings.

Return the maximum amount of splitted balanced strings.
*/

function balancedStrSplit(s) {
  let splitCount = 0;
  let left = 0;
  let right = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") right++;
    else if (s[i] === "L") left++;
    if (left === right) {
      splitCount++;
      left = 0;
      right = 0;
    }
  }
  return splitCount;
}

console.log(balancedStrSplit("RLRRLLRLRL") === 4);
console.log(balancedStrSplit("RLLLLRRRLR") === 3);
console.log(balancedStrSplit("LLLLRRRR") === 1);
console.log(balancedStrSplit("RLRRRLLRLL") === 2);
