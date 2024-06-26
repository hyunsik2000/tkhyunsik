const fs = require('fs');
const s = Number(fs.readFileSync('dev/stdin'));

for(let i=1; i <= s; i++){
  let blank = ' '.repeat( (s-i) );
  let stars = '*'.repeat( i+(i-1) );
  console.log( blank + stars );
}