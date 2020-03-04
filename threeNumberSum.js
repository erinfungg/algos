function threeNumberSum(arr, target) {
  arr.sort((a, b) => a - b);
  let triplets = [];
  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      let sum = curr + arr[left] + arr[right];
      if (sum < target) left++;
      else if (sum > target) right--;
      else {
        triplets.push([curr, arr[left], arr[right]]);
        left++;
        right--;
      }
    }
  }
  return triplets;
}

console.log(threeNumberSum([1, 2, 3], 6)); //[1, 2, 3]
console.log(threeNumberSum([1, 2, 3], 7)); //[]
console.log(threeNumberSum([12, 3, 1, 2, -6, 5, 0, -8, -1], 0)); //[[-8,3,5], [-6,1,5], [-1,0,1]]
console.log(threeNumberSum([12, 3, 1, 2, -6, 5, 0, -8, -1, 6], 0)); //[ [-8, 2, 6],[-8, 3, 5],[-6, 0, 6], [-6, 1, 5],[-1,0, 1],]
