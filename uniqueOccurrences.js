/*
Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.
*/

function uniqueOccurrences(arr) {
  let obj = {};
  let unique = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) obj[arr[i]]++;
    else obj[arr[i]] = 1;
  }

  for (let key in obj) {
    if (!unique[obj[key]]) unique[obj[key]] = 1;
    else return false;
  }

  return true;
}

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]) === true);
console.log(uniqueOccurrences([1, 2]) === false);
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]) === true);
