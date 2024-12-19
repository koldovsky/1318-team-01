/*базові*/

// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript

function stringToArray(string){
  const splittedArray = string.split(' ');
  return splittedArray;
}

// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript

function DNAtoRNA(dna){
  return dna.replace(/T/g, 'U');
}

/*поглиблені*/

// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

let min = function(list){
    return Math.min(...list);
   }

let max = function(list){
     return Math.max(...list);
}

// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

const min = (arr, toReturn) => toReturn === "value" ? Math.min(...arr) : arr.indexOf(Math.min(...arr))


/*додаткові*/

// https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript
function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  return i * 2;
}

// https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript

const twiceAsOld = (dadYearsOld, sonYearsOld) => Math.abs((sonYearsOld * 2) - dadYearsOld);

// https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript

const nthEven = n => 2 * (n - 1);

// https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript

const getRealFloor = floor => floor <= 0 ? floor : (floor < 13 ? floor -1 : floor - 2)

// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript

function past(hours, minutes, seconds){
  return (hours * 3600000) + (minutes * 60000) + (seconds * 1000);
}

// https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript

const isDivisible = (num, x, y) => (num % x === 0 && num % y === 0);

