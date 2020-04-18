function checkValidString(s) {
  let low = 0;
  let high = 0;
  for (let char of s) {
    if (char === "(") low++;
    else low--;
    if (char !== ")") high++;
    else high--;
    if (high < 0) break;
    low = Math.max(low, 0);
  }
  return low === 0;
}

console.log(checkValidString("(*)") === true);
console.log(checkValidString("((******)))") === true);
