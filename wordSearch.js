/*Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.*/

function exist(board, word) {
  let str = word;
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      let char = board[r][c];
      if (char === word[0]) {
        str = search(board, r, c, word.slice(1));
      }
      if (str === "") return true;
    }
  }
  return str === "";
}

function search(board, r, c, word) {
  if (word === "") return "";
  let match = word;
  let up, down, left, right;
  if (r - 1 >= 0) up = board[r - 1][c];
  if (r + 1 < board.length) down = board[r + 1][c];
  if (c + 1 < board[r].length) right = board[r][c + 1];
  if (c - 1 >= 0) left = board[r][c - 1];
  let curr = board[r][c];
  board[r][c] = 0;
  if (up === word[0] && up !== 0) {
    match = search(board, r - 1, c, word.slice(1));
    if (match === "") return "";
  }
  if (down === word[0] && down !== 0) {
    match = search(board, r + 1, c, word.slice(1));
    if (match === "") return "";
  }
  if (right === word[0] && right !== 0) {
    match = search(board, r, c + 1, word.slice(1));
    if (match === "") return "";
  }
  if (left === word[0] && left !== 0) {
    match = search(board, r, c - 1, word.slice(1));
    if (match === "") return "";
  }
  board[r][c] = curr;
  return match;
}

console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"]
    ],
    "ABCCED"
  ) === true
);
console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"]
    ],
    "ABCESEECFS"
  ) === true
);
console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"]
    ],
    "ABCB"
  ) === false
);
