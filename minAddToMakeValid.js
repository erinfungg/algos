function minAddToMakeValid(str) {
  let stack = [];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push("(");
    } else if (str[i] === ")" && stack.length) {
      stack.pop();
    } else {
      count++;
    }
  }
  return count + stack.length;
}

console.log(minAddToMakeValid("())") === 1);
console.log(minAddToMakeValid("(((") === 3);
console.log(minAddToMakeValid("()))((") === 4);
