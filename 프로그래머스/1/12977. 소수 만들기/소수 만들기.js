/*

    7 11 13 17 19 23

    배열에서 요소 3개 선택 해서 더해서 sum 설정 -> 배열에서 3개 어떻게 찾을건데...
    소수인지 판별 -> sum % (2부터 sum -1) !== 0 이면 count++;

*/


function solution(nums) {
    var answer = 0;

    function isPrime(n) {
  const limit = Math.floor(Math.sqrt(n));
  for (let d = 2; d <= limit; d++) {
    if (n % d === 0) return false;
  }
  return true;
}
    for(let i = 0; i < nums.length - 2; i++){
        for(let j = i + 1; j < nums.length - 1; j++){
            for(let k = j + 1; k < nums.length; k++){
                let sum = nums[i] + nums[j] + nums[k];
                if(isPrime(sum)) answer++;
            }
        }
    }
    
    return answer;
}