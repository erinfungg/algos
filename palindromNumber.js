function isPalindrome(x) {
  const str = x.toString();
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  if (str === reversed) return true;
  return false;
}

console.log(isPalindrome(121)); //true
console.log(isPalindrome(-121)); //false
console.log(isPalindrome(10)); //false
