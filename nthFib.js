function fib(n) {
  if (n < 2) return 0;
  if (n === 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(4) === 2);
console.log(fib(5) === 3);
console.log(fib(11) === 55);
