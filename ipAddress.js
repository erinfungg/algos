/*
Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".
*/

function defangIPaddr(address) {
  let newAdd = "";
  for (let i = 0; i < address.length; i++) {
    if (address[i] !== ".") newAdd += address[i];
    else {
      newAdd += "[.]";
    }
  }
  return newAdd;
}

console.log(defangIPaddr("1.1.1.1") === "1[.]1[.]1[.]1");
console.log(defangIPaddr("255.100.50.0") === "255[.]100[.]50[.]0");
