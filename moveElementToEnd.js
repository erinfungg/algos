function moveElementToEnd(array, toMove) {
  let i = 0;
  let j = array.length - 1;
  while (i < j) {
    if (array[j] === toMove) {
      j--;
    } else if (array[i] === toMove) {
      temp = array[j];
      array[j] = array[i];
      array[i] = temp;
      i++;
      j--;
    } else {
      i++;
    }
  }
  return array;
}

console.log(moveElementToEnd([1, 2, 4, 5, 2, 3], 2)); //[1,3,4,5,2,2]
console.log(moveElementToEnd([3, 4, 2, 3, 1, 1, 4, 1], 1)); //[3,4,2,3,4,1,1,1]
console.log(moveElementToEnd([2, 5, 9, 1, 4, 2, 2, 3, 5, 6, 8, 9, 9, 1, 2], 9)); //[2,5,2,1,4,2,2,3,5,6,8,1,9,9,9]
