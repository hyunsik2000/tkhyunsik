function solution(left, right) {
    var answer = 0;
    for(left; left <= right;left++){
        if(Number.isInteger(Math.sqrt(left))){
        answer -= left;
        }
        else { answer += left}
    }
    return answer;
}