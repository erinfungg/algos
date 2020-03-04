function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let i = 0;
  let j = 0;
  let diff = Infinity;
  let curDiff = Infinity;
  let pair = [];
  while (i < arrayOne.length && j < arrayTwo.length) {
    let first = arrayOne[i];
    let sec = arrayTwo[j];
    if (first < sec) {
      curDiff = sec - first;
      i++;
    } else if (first > sec) {
      curDiff = first - sec;
      j++;
    } else return [first, sec];
    if (curDiff < diff) {
      diff = curDiff;
      pair = [first, sec];
    }
  }
  return pair;
}

console.log(smallestDifference([-1, 5, 10, 20, 3], [26, 134, 135, 15, 17])); //[20,17]
console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17])); //[28,26]
console.log(
  smallestDifference([10, 0, 20, 25], [1005, 1006, 1014, 1032, 1031])
); //[25, 1005]
