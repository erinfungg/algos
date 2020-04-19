var threeSum = function(arr) {
  arr.sort((a, b) => a - b);
  let triplets = [];
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] > 0) break;
    if (i > 0 && arr[i] === arr[i - 1]) continue;
    let curr = arr[i];
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      let sum = curr + arr[left] + arr[right];
      if (sum < 0) left++;
      else if (sum > 0) right--;
      else {
        triplets.push([curr, arr[left], arr[right]]);
        left++;
        right--;
        while (left < right && arr[left] === arr[left - 1]) left++;
        while (left < right && arr[right] === [right + 1]) right++;
      }
    }
  }
  return triplets;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); //[[-1,-1,2],[-1,0,1]]
