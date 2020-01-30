function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      results.push(arr2[j]);
      j++;
    } else if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else if (i < j) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

console.log(mergeSort([1, 6, 2, 3, 98, 10, 45, 64, 1]));
console.log(
  mergeSort([3, 4, 2, 14, 5, 34, 5, 2, 123, 6, 3, 7, 8, 4, 44, 55, 33, 8])
);
