function stringSearch(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (long[i + j] !== short[j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
}

console.log(stringSearch("wowomgzomg", "omg") === 2);
console.log(stringSearch("lorie loled", "pop") === 0);
