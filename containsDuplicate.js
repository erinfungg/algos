/*
Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
*/

function containsDuplicate(nums) {
  let seen = {};

  for (let i = 0; i < nums.length; i++) {
    if (!seen[nums[i]]) {
      seen[nums[i]] = 1;
    } else {
      return true;
    }
  }
  return false;
}

console.log(containsDuplicate([1, 2, 3, 1])); //true
console.log(containsDuplicate([1, 4, 5, 4, 6, 1])); //true
console.log(containsDuplicate([6, 7, 8, 9])); //false
