function insertionSort(arr) {
  let val = 0;
  for (let i = 1; i < arr.length; i++) {
    val = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (val < arr[j]) arr[j + 1] = arr[j];
      else {
        arr[j + 1] = val;
        break;
      }
      if (j === 0) arr[j] = val;
    }
  }
  return arr;
}

console.log(insertionSort([6, 3])); //[3,6]
console.log(insertionSort([3, 6, 1, 9])); //[1, 3, 6, 9]
console.log(insertionSort([2, 8, 4, 0, 7, 5])); //[0, 2, 4, 5, 7, 8]
