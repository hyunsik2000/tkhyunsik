const fs = require('fs');
const n = Number(fs.readFileSync('dev/stdin'));

function count(num) {
  if (num <= 1) {
    return 1;
  }
  return num * count(num - 1)
}

console.log(count(n));