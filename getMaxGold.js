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
