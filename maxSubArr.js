/*Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.*/

function maxSubArray(nums) {
  let max = -Infinity;
  let temp = 0;
  for (let i = 0; i < nums.length; i++) {
    temp += nums[i];
    max = Math.max(max, temp);
    if (temp < 0) temp = 0;
  }
  return max;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6);
