//https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
const circleCircumference = circle => 2 * Math.PI * circle.radius;

//https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
function giveMeFive(obj) {
    const fiveLenghtArray = [];
    for (var key in obj) {
      if (key.length === 5) fiveLenghtArray.push(key);
      if (obj[key].length === 5) fiveLenghtArray.push(obj[key]);
    }
    return fiveLenghtArray;
  }