function solution(n) {
    var answer = 0;
    answer = parseInt((n + '').split('').sort((a,b) => (b - a)).join(''));
    
    return answer;
}