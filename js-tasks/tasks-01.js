
// https://leetcode.com/problems/counter/

function createCounter(n) {
  let counter = n;
  return function () {
    return n++;
  };
}

/*------------------------------------------------*/
//https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

//https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
function makeNegative(num) {
  if (num < 0) {
    return num;
  } else {
    return -num;
  }
}

//https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript
function move(position, roll) {
  return position + roll * 2;
}

//https://www.codewars.com/kata/5772da22b89313a4d50012f7/train/javascript
function greet(name, owner) {
  if (owner === name) {
    return "Hello boss";
  } else {
    return "Hello guest";
  }
}

//https://www.codewars.com/kata/582cb0224e56e068d800003c/train/javascript
function litres(time) {
  let a;
  a = Math.floor(time / 2);
  return a;
}

// https://www.codewars.com/kata/555086d53eac039a2a000083
function lovefunc(flower1, flower2) {
  if (
    (flower1 % 2 === 1 && flower2 % 2 === 0) ||
    (flower1 % 2 === 0 && flower2 % 2 === 1)
  ) {
    return true;
  } else {
    return false;
  }
}

/*------------------------------------------------*/

// https://www.codewars.com/kata/555086d53eac039a2a000083
function lovefunc(flower1, flower2) {
  if (
    (flower1 % 2 === 1 && flower2 % 2 === 0) ||
    (flower1 % 2 === 0 && flower2 % 2 === 1)
  ) {
    return true;
  } else {
    return false;
  }
}

// https://www.codewars.com/kata/57f780909f7e8e3183000078
function grow(x) {
  let temp = 1;
  for (let index = 0; index < x.length; index++) {
    temp *= x[index];
  }
  return temp;
}

// https://www.codewars.com/kata/5601409514fc93442500010b
function betterThanAverage(classPoints, yourPoints) {
  let temp = 0;
  for (let i = 0; i < classPoints.length; i++) {
    temp += classPoints[i];
  }
  let average;
  average = temp / classPoints.length;

  if (yourPoints > average) {
    return true;
  } else {
    return false;
  }
}

//https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript
function maps(x) {
  const arr1 = [];
  for (let i = 0; i < x.length; i++) {
    arr1.push(x[i] * 2);
  }
  return arr1;
}
//https://www.codewars.com/kata/5ab6538b379d20ad880000ab/train/javascript
const areaOrPerimeter = function (l, w) {
  if (l === w) {
    return l * w;
  } else {
    return (l + w) * 2;
  }
};

//https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript
function solution(str) {
  const narr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    narr.push(str[i]);
  }
  return narr.join("");
}

//https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript
function removeEveryOther(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}


