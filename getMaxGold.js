/*In a gold mine grid of size m * n, each cell in this mine has an integer representing the amount of gold in that cell, 0 if it is empty.

Return the maximum amount of gold you can collect under the conditions:

Every time you are located in a cell you will collect all the gold in that cell.
From your position you can walk one step to the left, right, up or down.
You can't visit the same cell more than once.
Never visit a cell with 0 gold.
You can start and stop collecting gold from any position in the grid that has some gold.*/

function getMaximumGold(grid) {
  let max = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      let curr = grid[r][c];
      if (curr !== 0) {
        max = Math.max(max, dfs(grid, r, c));
      }
    }
  }
  return max;
}

function dfs(grid, r, c) {
  let total = 0;
  if (
    r < 0 ||
    r >= grid.length ||
    c < 0 ||
    c >= grid[r].length ||
    grid[r][c] === 0
  )
    return 0;
  total += grid[r][c];
  grid[r][c] = 0;
  let up = dfs(grid, r - 1, c);
  let down = dfs(grid, r + 1, c);
  let right = dfs(grid, r, c + 1);
  let left = dfs(grid, r, c - 1);
  grid[r][c] = total;
  return Math.max(up, down, left, right) + total;
}

console.log(
  getMaximumGold([
    [1, 0, 7],
    [2, 0, 6],
    [3, 4, 5],
    [0, 3, 0],
    [9, 0, 20]
  ]) === 28
);
