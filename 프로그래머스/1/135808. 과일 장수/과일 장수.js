function solution(k, m, score) {
    var answer = 0;
    
    let newScore = score.sort();
    
    for(let i = newScore.length; i > 0; i-= m){
        if(i-m < 0){
            break;
        }
        answer += newScore[i - m] * m
    }
    
    return answer;
}