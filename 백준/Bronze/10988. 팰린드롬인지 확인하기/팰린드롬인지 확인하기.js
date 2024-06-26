const fs = require('fs');
const letters = fs.readFileSync('dev/stdin').toString().trim();

let newOne = [];
let newTwo = [];

if (letters.length % 2 === 1) {
  for (let i = 0; i < letters.length / 2 - 1; i++) { 
    newOne.push(letters[i]);
  }
  for (let i = letters.length - 1; i > letters.length / 2; i--) {
    newTwo.push(letters[i]);
  }
}
else {
  for (let i = 0; i < letters.length / 2; i++) { 
    newOne.push(letters[i]);
  }
  for (let i = letters.length - 1; i >= letters.length / 2; i--) {
    newTwo.push(letters[i]);
  }
}

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

if (arraysEqual(newOne, newTwo) === true) {
  console.log(1);
}
else {
  console.log(0);
}