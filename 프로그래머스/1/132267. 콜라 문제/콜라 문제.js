function solution(a, b, n) {
    var answer = 0;
    var lastBottle = 0;
    while(n >= a){
        let nowBottle = Math.floor(n / a) * b;
        lastBottle = n % a;
        n = nowBottle + lastBottle;
        answer += nowBottle;
    }
    return answer;

}