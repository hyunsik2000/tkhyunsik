const fs = require('fs');
const [A, B] = fs.readFileSync(0, 'utf-8').trim().split(' ').map(Number);

let a = parseInt(A);
let b = parseInt(B);

let count = 0;

while (a !== b) {
  if (a > b) {
      count = -1;
      break;
  }

  if (b % 2 === 0) {
    b = b / 2;
  }
  else if (b % 10 === 1) {
      b = Math.floor(b / 10);
    }
  else {
      count = -1;
      break;
  }
  count += 1;
}

if (count === -1) { 
  count = -2;
}

console.log(count+1);

