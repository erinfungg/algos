/*
Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.
*/

function sortArrayByParity(A) {
  let even = [];
  let odd = [];
  for (let i = 0; i < A.length; i++) {
    if (A[i] % 2 === 0) even.push(A[i]);
    else odd.push(A[i]);
  }
  return even.concat(odd);
}

console.log(sortArrayByParity([3, 1, 2, 4])); //[2, 4, 3, 1];
console.log(sortArrayByParity([5, 8, 3, 2])); //[8, 2, 5, 3];
