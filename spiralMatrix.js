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
