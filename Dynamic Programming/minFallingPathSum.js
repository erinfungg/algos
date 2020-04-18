function minFallingPathSum(A) {
  for (let r = 1; r < A.length; r++) {
    for (let c = 0; c < A[r].length; c++) {
      if (c === A[r].length - 1)
        A[r][c] += Math.min(A[r - 1][c - 1], A[r - 1][c]);
      else if (c === 0) A[r][c] += Math.min(A[r - 1][c], A[r - 1][c + 1]);
      else A[r][c] += Math.min(A[r - 1][c - 1], A[r - 1][c], A[r - 1][c + 1]);
    }
  }
  return Math.min(...A[A.length - 1]);
}

console.log(
  minFallingPathSum([
    [17, 82],
    [1, -44]
  ]) === -27
);
console.log(
  minFallingPathSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]) === 12
);
