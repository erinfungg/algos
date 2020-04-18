function findMaxLength(nums) {
  let max = 0;
  let count = 0;
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    let el = nums[i];
    if (el === 0) count--;
    else count++;

    if (count === 0) max = i + 1;

    if (!(count in hash)) hash[count] = i;
    else max = Math.max(max, i - hash[count]);
  }
  return max;
}

console.log(findMaxLength([0, 1]) === 2);
console.log(findMaxLength([0, 1, 0]) === 2);
