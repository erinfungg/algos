function topKFrequent(words, k) {
  let freq = {};
  for (let word of words) {
    if (!(word in freq)) freq[word] = 1;
    else freq[word]++;
  }
  let sortedKeys = Object.keys(freq).sort((a, b) => {
    if (freq[a] === freq[b]) {
      if (a > b) return 1;
      else if (a < b) return -1;
      return 0;
    } else {
      return freq[b] - freq[a];
    }
  });
  return sortedKeys.slice(0, k);
}

console.log(topKFrequent(["i", "love", "coding", "i", "love", "food"], 2)); //['i', 'love']
console.log(
  topKFrequent(["my", "name", "is", "erin", "my", "dog", "is", "naicha"], 3) //['is', 'my', 'dog']
);
