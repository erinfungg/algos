function minNumberOfCoinsForChange(n, denoms) {
  let nums = new Array(n + 1).fill(Infinity);
  nums[0] = 0;
  for (let i = 0; i < denoms.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (denoms[i] <= j) {
        nums[j] = Math.min(nums[j], 1 + nums[j - denoms[i]]);
      }
    }
  }

  return nums[n] === Infinity ? -1 : nums[n];
}

console.log(minNumberOfCoinsForChange(25, [1, 5, 10]) === 3);
console.log(minNumberOfCoinsForChange(7, [3, 7]) === 1);
console.log(minNumberOfCoinsForChange(1, [3, 2, 5]) === -1);
