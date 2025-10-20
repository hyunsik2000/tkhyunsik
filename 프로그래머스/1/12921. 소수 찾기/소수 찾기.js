function solution(n) {
    var answer = 0;
    
    function isPrime(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  const limit = Math.floor(Math.sqrt(n));
  for (let d = 3; d <= limit; d += 2) {
    if (n % d === 0) return false;
  }
  return true;
}
    
    for(let i = 2; i <= n; i++) {
        if(isPrime(i)) answer++;
    }

    
    
    return answer;
}