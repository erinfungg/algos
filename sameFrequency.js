function sameFrequency(num1, num2) {
  const num1Str = num1.toString();
  const num2Str = num2.toString();
  let count1 = {};
  let count2 = {};

  for (let n of num1Str) {
    count1[n] = (count1[n] || 0) + 1;
  }
  for (let n of num2Str) {
    count2[n] = (count2[n] || 0) + 1;
  }
  for (let key in count1) {
    if (!(key in count2)) return false;
    if (count2[key] !== count1[key]) return false;
  }
  return true;
}

console.log(sameFrequency(182, 281) === true);
console.log(sameFrequency(34, 14) === false);
console.log(sameFrequency(3589578, 5879385) === true);
console.log(sameFrequency(22, 222) === false);
