const fs = require('fs');
const s = fs.readFileSync('dev/stdin');

const result = [];

for (let i = 97; i <= 122; i++) { 
  result.push(s.indexOf(String.fromCharCode(i)));
}

console.log(result.join(" "));