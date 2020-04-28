/*Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.*/

var maximalSquare = function(matrix) {
  let min = 0;
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      if (r === 0 || c === 0) {
        min = Math.max(min, matrix[r][c]);
      } else if (matrix[r][c] === "1") {
        matrix[r][c] =
          Math.min(
            +matrix[r - 1][c],
            +matrix[r][c - 1],
            +matrix[r - 1][c - 1]
          ) + 1;
        min = Math.max(min, matrix[r][c]);
      }
    }
  }
  return min * min;
};

console.log(
  maximalSquare([
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"]
  ]) === 4
);
