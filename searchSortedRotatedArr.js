/*Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).*/

var search = function(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    if (nums[start] === target) return start;
    else if (nums[end] === target) return end;
    let midIdx = Math.floor((start + end) / 2);
    let mid = nums[midIdx];
    if (mid === target) return midIdx;
    else if (mid < nums[end]) {
      if (target > mid && target < nums[end]) {
        start = midIdx + 1;
        end--;
      } else end = midIdx - 1;
    } else {
      if (target < mid && target > nums[start]) {
        end = midIdx - 1;
        start++;
      } else start = midIdx + 1;
    }
  }
  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0) === 4);
console.log(search([4, 5, 6, 7, 0, 1, 2], 3) === -1);
