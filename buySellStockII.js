function maxProfit(prices) {
  let profits = 0;
  let min = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else if (prices[i] < prices[i + 1]) continue;
    else {
      profits += prices[i] - min;
      min = Infinity;
    }
  }

  return profits;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]) === 7);
console.log(maxProfit([1, 2, 3, 4, 5]) === 4);
