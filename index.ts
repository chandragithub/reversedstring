// string conversion using leymen method

let strInput = 'Hello';

// Method 1
function reversed(str) {
  let rev = '';
  for (let char of str) {
    rev = char + rev;
  }
  
  return rev;
}

// Method 2
function reversed2(str) {
  return str.split('').reverse().join('');
}

// Method 3
function reversed3(str) {
   return str.split('').reduce((rev, char) => {
     return char + rev;
   }, '')
}

let result = reversed3(strInput);

console.log(result);