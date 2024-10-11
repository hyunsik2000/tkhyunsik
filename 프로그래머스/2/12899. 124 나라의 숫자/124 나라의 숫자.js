function solution(n) {
    var answer = '';
    var solNum = ["4", "1", "2"];
    
    while (n > 0) {
        let remainder = n % 3;
        n = Math.floor((n - 1) / 3);
        answer = solNum[remainder] + answer;
    }
    
    return answer;
}