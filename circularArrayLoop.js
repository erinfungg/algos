function circularArrayLoop(nums) {
  if (nums.length < 2) return false;

  for (let i = 0; i < nums.length; i++) {
    let cLen = 0;
    let curr = nums[i];
    let currIdx = i;

    while (cLen <= nums.length) {
      let next = curr + currIdx;
      if (next >= nums.length) {
        next %= nums.length;
      } else if (next < 0) {
        next = nums.length + (next % nums.length);
      }
      if ((curr > 0 && nums[next] < 0) || (curr < 0 && nums[next] > 0)) {
        break;
      }
      cLen++;
      if (next === i && cLen === 1) break;
      if (cLen > 1 && next === i) {
        return true;
      }
      currIdx = next;
      curr = nums[next];
    }
  }
  return false;
}

console.log(circularArrayLoop([-1, -2, -3, -4, -5])); //false
console.log(circularArrayLoop([3, 1, 2])); //true
console.log(circularArrayLoop([2, -1, 1, 2, 2])); //true
console.log(circularArrayLoop([-1, 2])); //false
