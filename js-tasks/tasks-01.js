
// https://leetcode.com/problems/counter/

function createCounter(n) {
  let counter = n;
  return function () {
    return n++;
  };
}

