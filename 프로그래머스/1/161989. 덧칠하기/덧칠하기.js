function solution(n, m, section) {
  let count = 0;
  let covered = 0;
    
    for(const word of section){
        if(covered < word){
            count++;
            covered = word + m - 1
        }
    }

  return count;
}