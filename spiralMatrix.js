/*Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.*/

function spiralOrder(matrix) {
  let results = [];
  if (!matrix.length) return matrix;
  let top = 0;
  let right = matrix[0].length - 1;
  let bottom = matrix.length - 1;
  let left = 0;
  let mSize = matrix.length * matrix[0].length;
  while (results.length < mSize) {
    for (let i = left; i <= right && results.length < mSize; i++) {
      results.push(matrix[top][i]);
    }
    top++;
    for (let i = top; i <= bottom && results.length < mSize; i++) {
      results.push(matrix[i][right]);
    }
    right--;
    for (let i = right; i >= left && results.length < mSize; i--) {
      results.push(matrix[bottom][i]);
    }
    bottom--;
    for (let i = bottom; i >= top && results.length < mSize; i--) {
      results.push(matrix[i][left]);
    }
    left++;
  }
  return results;
}

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
); //[1, 2, 3, 6, 9, 8, 7, 4, 5]

const spiralOrder = function(matrix) {
  if (!matrix.length) return [];
  let res = [];
  let [row, col] = [0, 0];
  let d = 0;
  let dir = {
    0: [0, 1], // right
    1: [1, 0], // down
    2: [0, -1], // left
    3: [-1, 0] // up
  };
  for (let i = 0; i < matrix.length * matrix[0].length; i++) {
    res.push(matrix[row][col]);
    matrix[row][col] = null;
    switch (d % 4) {
      case 0:
        if (col === matrix[0].length - 1 || matrix[row][col + 1] === null) d++;
        [row, col] = [row + dir[d % 4][0], col + dir[d % 4][1]];
        break;
      case 1:
        if (row === matrix.length - 1 || matrix[row + 1][col] === null) d++;
        [row, col] = [row + dir[d % 4][0], col + dir[d % 4][1]];
        break;
      case 2:
        if (col === 0 || matrix[row][col - 1] === null) d++;
        [row, col] = [row + dir[d % 4][0], col + dir[d % 4][1]];
        break;
      case 3:
        if (row === matrix.length - 1 || matrix[row - 1][col] === null) d++;
        [row, col] = [row + dir[d % 4][0], col + dir[d % 4][1]];
        break;
      default:
        break;
    }
  }
  return res;
};
