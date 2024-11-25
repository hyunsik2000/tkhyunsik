function solution(n, a, b) {
    var answer = 0;
    var numA = a;
    var numB = b;
    
    while (numA !== numB) {
        numA = Math.ceil(numA / 2);
        numB = Math.ceil(numB / 2);
        answer++;
    }
    
    return answer;
}