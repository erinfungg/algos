/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
*/

function isValid(s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") stack.push(s[i]);
    else if (s[i] === ")" && stack.pop() !== "(") {
      return false;
    } else if (s[i] === "}" && stack.pop() !== "{") {
      return false;
    } else if (s[i] === "]" && stack.pop() !== "[") {
      return false;
    }
  }

  if (stack.length) return false;

  return true;
}

console.log(isValid("()")); //true
console.log(isValid("()[]{}")); //true
console.log(isValid("([)]")); //false
