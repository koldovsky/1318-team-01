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
