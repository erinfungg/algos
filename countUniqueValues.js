function countUniqueValues(arr) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length === 0) return 0;
  if (arr.length === 1) return 1;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues([1]) === 1);
console.log(countUniqueValues([]) === 0);
console.log(countUniqueValues([1, 1, 1, 1, 2]) === 2);
console.log(countUniqueValues([-2, -1, -1, 0, 1]) === 4);
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) === 7);
