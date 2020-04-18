/*Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.*/

function generate(numRows) {
  let triangle = [];
  for (let r = 0; r < numRows; r++) {
    let row = [];
    for (let c = 0; c < r + 1; c++) {
      if (c === 0 || c === r) row.push(1);
      else row.push(triangle[r - 1][c - 1] + triangle[r - 1][c]);
    }
    triangle.push(row);
  }
  return triangle;
}

console.log(generate(5));
/*
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/
