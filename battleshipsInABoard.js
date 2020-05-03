/*Given an 2D board, count how many battleships are in it. The battleships are represented with 'X's, empty slots are represented with '.'s. You may assume the following rules:
You receive a valid board, made of only battleships or empty slots.
Battleships can only be placed horizontally or vertically. In other words, they can only be made of the shape 1xN (1 row, N columns) or Nx1 (N rows, 1 column), where N can be of any size.
At least one horizontal or vertical cell separates between two battleships - there are no adjacent battleships.*/

function countBattleships(board) {
  let count = 0;
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      if (board[r][c] === "X") {
        count++;
        findShip(board, r, c);
      }
    }
  }
  return count;
}

function findShip(board, r, c) {
  if (board[r][c] === ".") return;
  board[r][c] = ".";
  if (r + 1 < board.length && board[r + 1][c] === "X") {
    findShip(board, r + 1, c);
  } else if (c + 1 < board[r].length && board[r][c + 1] === "X")
    findShip(board, r, c + 1);
}

console.log(
  countBattleships([
    ["X", ".", ".", "X"],
    [".", ".", ".", "X"],
    [".", ".", ".", "X"]
  ]) === 2
);
