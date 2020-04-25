/*Given a string, sort it in decreasing order based on the frequency of characters.*/

function frequencySort(s) {
  let freq = {};
  for (let char of s) {
    if (!(char in freq)) freq[char] = char;
    else freq[char] += char;
  }
  let sortedKeys = Object.values(freq).sort((a, b) => {
    if (a.length > b.length) return -1;
    else if (a.length < b.length) return 1;
    else return 0;
  });
  return sortedKeys.join("");
}

console.log(frequencySort("tree") === "eetr");
console.log(frequencySort("hello") === "llheo");
