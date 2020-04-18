function minPathSum(grid) {
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (r && c) grid[r][c] += Math.min(grid[r - 1][c], grid[r][c - 1]);
      else if (r !== 0) grid[r][c] += grid[r - 1][c];
      else if (c !== 0) grid[r][c] += grid[r][c - 1];
    }
  }
  return grid[grid.length - 1][grid[0].length - 1];
}

console.log(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
  ]) === 7
);
