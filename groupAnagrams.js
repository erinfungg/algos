function groupAnagrams(strs) {
  let finalArr = [];
  let hash = {};
  for (let word of strs) {
    let sorted = word.split("").sort();
    if (!hash[sorted]) hash[sorted] = [word];
    else hash[sorted].push(word);
  }
  for (let key in hash) {
    finalArr.push(hash[key]);
  }
  return finalArr;
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
