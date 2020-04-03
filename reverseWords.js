function reverseWords(message) {
  reverse(message, 0, message.length - 1);

  let space = 0;
  for (let i = 0; i <= message.length; i++) {
    if (i === message.length || message[i] === " ") {
      reverse(message, space, i - 1);
      space = i + 1;
    }
  }
}

function reverse(message, start, end) {
  while (start < end) {
    [message[start], message[end]] = [message[end], message[start]];
    start++;
    end--;
  }
}

let input = "thief cake".split("");
reverseWords(input);
console.log(input.join("") === "cake thief");
