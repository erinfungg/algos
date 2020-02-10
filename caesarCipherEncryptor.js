function caesarCipherEncryptor(string, key) {
  // Write your code here.
  let newStrArr = [];
  if (key >= 26) key = key % 26;
  for (let i = 0; i < string.length; i++) {
    newCode = string[i].charCodeAt() + key;
    if (newCode > 122)
      newStrArr.push(String.fromCharCode(96 + (newCode % 122)));
    else newStrArr.push(String.fromCharCode(newCode));
  }

  return newStrArr.join("");
}

console.log(caesarCipherEncryptor("abc", 0) === "abc");
console.log(caesarCipherEncryptor("xyz", 2) === "zab");
console.log(caesarCipherEncryptor("abc", 52) === "abc");
console.log(caesarCipherEncryptor("abc", 57) === "fgh");
