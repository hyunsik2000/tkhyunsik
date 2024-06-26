const fs = require('fs');
const n = Number(fs.readFileSync('dev/stdin'));

let sum = 1;

if (n >= 1) {

  for (let i = 1; i <= n; i++) {
    sum *= i;
  }
  console.log(sum);
}

else { console.log(sum); }
