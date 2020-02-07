function canVisitAllRooms(rooms) {
  let visited = {};
  let queue = [...rooms[0]];
  while (queue.length) {
    let goToRoom = queue.shift();
    if (goToRoom !== 0 && !(goToRoom in visited)) {
      for (let i = 0; i < rooms[goToRoom].length; i++) {
        queue.push(rooms[goToRoom][i]);
      }
      visited[goToRoom] = true;
    }
  }
  if (Object.keys(visited).length + 1 === rooms.length) return true;
  return false;
}

console.log(canVisitAllRooms([[1], [2], [3], []]) === true);
console.log(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]]) === false);
console.log(
  canVisitAllRooms([
    [6, 7, 8],
    [5, 4, 9],
    [],
    [8],
    [4],
    [],
    [1, 9, 2, 3],
    [7],
    [6, 5],
    [2, 3, 1]
  ]) === true
);
