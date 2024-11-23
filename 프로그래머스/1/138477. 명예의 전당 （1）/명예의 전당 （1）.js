function solution(k, score) {
    var answer = [];
    var honor = [];
    for(let i = 0; i < score.length; i++){
        honor.push(score[i]);
        honor.sort((a,b) => b - a);
        (honor.length < k) ? answer.push(honor[i]) : answer.push(honor[k - 1]);
    }
    return answer;
}