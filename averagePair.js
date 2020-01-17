function averagePair(arr, num) {
  if (arr.length < 2) return false;
  let add = 0;
  let sub = arr.length - 1;
  while (add < sub) {
    let avg = (arr[sub] + arr[add]) / 2;
    if (avg > num) sub--;
    else if (avg < num) add++;
    else if (avg === num) return true;
  }

  return false;
}

console.log(averagePair([1, 2, 3], 2.5) === true);
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) === true);
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1) === false);
console.log(averagePair([], 4) === false);
