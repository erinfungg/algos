//Given an array of integers, return indices of the two numbers such that they add up to a specific target.

//Brute Force
// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// }

//Optimized
function twoSum(nums, target) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (hash[nums[i]] !== undefined) {
      return [hash[nums[i]], i];
    } else {
      hash[diff] = i;
    }
  }
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([4, 6, 9, 2], 8)); // [1, 3]
console.log(twoSum([-1, -4, 8, -3, 2], 1)); // [0, 4]
