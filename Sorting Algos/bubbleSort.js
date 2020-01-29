function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    let swapped = true;
    //number of comparisons
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = false;
      }
    }
    if (swapped) break;
  }
  return arr;
}

console.log(bubbleSort([1, 6, 3, 9])); //[1, 3, 6, 9]
console.log(bubbleSort([2, 8, 4, 0, 7, 5])); //[0, 2, 4, 5, 7, 8]
