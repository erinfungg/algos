var lastStoneWeight = function(stones) {
  while (stones.length > 1) {
    stones.sort((a, b) => a - b);
    let s1 = stones[stones.length - 1];
    let s2 = stones[stones.length - 2];
    if (s1 === s2) {
      stones.pop();
      stones.pop();
    } else {
      stones[stones.length - 2] = s1 - s2;
      stones.pop();
    }
  }
  return stones[0] || 0;
};

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]) === 1);
console.log(lastStoneWeight([6, 3, 4, 2, 6, 3, 8]) === 2);
