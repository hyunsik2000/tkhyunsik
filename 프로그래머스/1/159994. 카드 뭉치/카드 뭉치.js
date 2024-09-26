function solution(cards1, cards2, goal) {
    var answer = 'Yes';
    let cards1Num = 0;
    let cards2Num = 0;
    for (let i = 0; i < goal.length; i++){
        if(goal[i] === cards1[cards1Num]){
            cards1Num++;
        }
        else if(goal[i] === cards2[cards2Num]){
            cards2Num++;
        }
        else {answer = 'No'}
    }
    return answer;
}