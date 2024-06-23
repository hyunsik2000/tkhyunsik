const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const allNumber = parseInt(input[0]);
const numbers = input[1].trim().split(' ').map(Number);
const v = parseInt(input[2]);

let count = numbers.filter((value) => value === v);

console.log(count.length);