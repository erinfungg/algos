function selectionSort(arr) {
  let min;

  for (let i = 0; i < arr.length; i++) {
    min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}

console.log(selectionSort([3, 6, 1, 9])); //[1, 3, 6, 9]
console.log(selectionSort([2, 8, 4, 0, 7, 5])); //[0, 2, 4, 5, 7, 8]
