function productExceptSelf(nums) {
  let left = [1];
  let right = [1];
  let results = [];
  for (let i = 1; i < nums.length; i++) {
    left.push(nums[i - 1] * left[left.length - 1]);
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    right.unshift(nums[i + 1] * right[0]);
  }
  for (let i = 0; i < nums.length; i++) {
    results.push(left[i] * right[i]);
  }
  return results;
}

console.log(productExceptSelf([1, 2, 3, 4])); //[24,12,8,6];
