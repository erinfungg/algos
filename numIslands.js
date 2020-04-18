function numIslands(grid) {
  let count = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      let curr = grid[r][c];
      if (curr === "1") {
        count++;
        dfs(grid, r, c);
      }
    }
  }
  return count;
}

function dfs(grid, r, c) {
  if (
    r < 0 ||
    r >= grid.length ||
    c < 0 ||
    c >= grid[r].length ||
    grid[r][c] === "0"
  )
    return;
  grid[r][c] = "0";
  dfs(grid, r - 1, c); //up
  dfs(grid, r + 1, c); //down
  dfs(grid, r, c - 1); //left
  dfs(grid, r, c + 1); //right
}

console.log(
  numIslands([
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
  ]) === 3
);
console.log(
  numIslands([
    ["1", "1", "1"],
    ["0", "1", "0"],
    ["1", "1", "1"]
  ]) === 1
);
