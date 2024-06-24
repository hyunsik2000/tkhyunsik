const fs = require('fs');
const n = Number(fs.readFileSync('dev/stdin'));


for(let i=1; i < n; i++){
  let blank = ' '.repeat( (n-i) );
  let stars = '*'.repeat( i+(i-1) );
  console.log( blank + stars );
}

for (let i = n; i > 0; i--) { 
  let blank = ' '.repeat(n-i);
  let stars = '*'.repeat(i + (i - 1));
  console.log( blank + stars );
}