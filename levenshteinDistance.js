function levenshteinDistance(str1, str2) {
  let edits = [];
  for (let i = 0; i <= str2.length; i++) {
    let row = [];
    for (let j = 0; j <= str1.length; j++) {
      row.push(j);
    }
    row[0] = i;
    edits.push(row);
  }
  for (let i = 1; i <= str2.length; i++) {
    for (let j = 1; j <= str1.length; j++) {
      if (str2[i - 1] === str1[j - 1]) {
        edits[i][j] = edits[i - 1][j - 1];
      } else {
        edits[i][j] =
          Math.min(edits[i][j - 1], edits[i - 1][j - 1], edits[i - 1][j]) + 1;
      }
    }
  }
  return edits[str2.length][str1.length];
}

console.log(levenshteinDistance("", "") === 0);
console.log(levenshteinDistance("abc", "yabd") === 2);
console.log(levenshteinDistance("aaa", "aab") === 1);
console.log(levenshteinDistance("abcdef", "123456") === 6);
