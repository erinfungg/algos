function moveZeroes(nums) {
  let zero = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let temp = nums[zero];
      nums[zero] = nums[i];
      nums[i] = temp;
      zero++;
    }
  }
  return nums;
}

console.log(moveZeroes([0, 2, 1, 3, 0, 9])); // [2,1,3,9,0,0]
console.log(moveZeroes([0, 0, 0, 1])); // [1,0,0,0]
