function mergeRanges(meetings) {
  meetings.sort((a, b) => a.startTime - b.startTime);
  let merged = {};
  let newArr = [];
  let i = 0;
  let first = meetings[i];

  while (i < meetings.length) {
    let sec = meetings[i + 1];
    if (i === meetings.length - 1 || first.endTime < sec.startTime) {
      newArr.push({ startTime: first.startTime, endTime: first.endTime });
      i++;
      first = meetings[i];
    } else if (first.endTime >= sec.startTime) {
      merged.startTime = first.startTime;
      merged.endTime = Math.max(first.endTime, sec.endTime);
      first = merged;
      i++;
    }
  }

  return newArr;
}

console.log(
  mergeRanges([
    { startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 5 },
    { startTime: 4, endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9, endTime: 10 }
  ])
); //[{ startTime: 0, endTime: 1 }, { startTime: 3, endTime: 8 },{ startTime: 9, endTime: 12 }];
