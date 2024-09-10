function solution(x, n) {
    var answer = [];
    let firstNum = x;
    for(let i = 0; i < n;i++){
        answer.push(firstNum);
        firstNum += x;
    }
    
    return answer;
}