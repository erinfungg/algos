function stringShift(s, shift) {
  let sArr = s.split("");
  let shiftCount = 0;
  for (let i = 0; i < shift.length; i++) {
    if (shift[i][0] === 0) shiftCount -= shift[i][1];
    else shiftCount += shift[i][1];
  }
  while (shiftCount) {
    if (shiftCount < 0) {
      let char = sArr.shift();
      sArr.push(char);
      shiftCount++;
    } else {
      let char = sArr.pop();
      sArr.unshift(char);
      shiftCount--;
    }
  }
  return sArr.join("");
}

console.log(
  stringShift("abc", [
    [0, 1],
    [1, 2]
  ]) === "cab"
);
console.log(
  stringShift("abcdefg", [
    [1, 1],
    [1, 1],
    [0, 2],
    [1, 3]
  ]) === "efgabcd"
);
