/*A binary matrix means that all elements are 0 or 1. For each individual row of the matrix, this row is sorted in non-decreasing order.

Given a row-sorted binary matrix binaryMatrix, return leftmost column index(0-indexed) with at least a 1 in it. If such index doesn't exist, return -1.

You can't access the Binary Matrix directly.  You may only access the matrix using a BinaryMatrix interface:

BinaryMatrix.get(x, y) returns the element of the matrix at index (x, y) (0-indexed).
BinaryMatrix.dimensions() returns a list of 2 elements [n, m], which means the matrix is n * m.*/

var leftMostColumnWithOne = function(binaryMatrix) {
  let [row, col] = binaryMatrix.dimensions();
  let r = 0;
  let c = col - 1;
  let lastSeen = -1;
  while (r < row && c >= 0) {
    let num = binaryMatrix.get(r, c);
    if (num === 0) r++;
    else {
      lastSeen = c;
      c--;
    }
  }
  return lastSeen;
};
