/*Given a string s, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them causing the left and the right side of the deleted substring to concatenate together.

We repeatedly make k duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made.

It is guaranteed that the answer is unique.*/

function removeDuplicates(s, k) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let top = stack[stack.length - 1];
    if (!stack.length || top.val !== s[i]) stack.push({ val: s[i], count: 1 });
    else {
      if (top.count + 1 < k) top.count++;
      else stack.pop();
    }
  }
  let final = "";
  stack.forEach(char => {
    let i = 0;
    while (i < char.count) {
      final += char.val;
      i++;
    }
  });
  return final;
}

console.log(removeDuplicates("deeedbbcccbdaa", 3) === "aa");
console.log(removeDuplicates("pbbcggttciiippooaais", 2) === "ps");
