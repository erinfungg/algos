function numberOfWaysToMakeChange(n, denoms) {
  let ways = new Array(n + 1).fill(0);
  ways[0] = 1;
  for (let denom of denoms) {
    for (let i = 1; i < ways.length; i++) {
      if (denom <= i) {
        ways[i] += ways[i - denom];
      }
    }
  }
  return ways[n];
}

console.log(numberOfWaysToMakeChange(6, [1, 5]) === 2);
console.log(numberOfWaysToMakeChange(7, [2, 4]) === 0);
console.log(numberOfWaysToMakeChange(10, [1, 5, 10, 25]) === 4);
