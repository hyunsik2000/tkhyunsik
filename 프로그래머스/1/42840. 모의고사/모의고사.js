function solution(answers) {
    var answer = [];
    const person_one = [1, 2, 3, 4, 5];
    const person_two = [2, 1, 2, 3, 2, 4, 2, 5];
    const person_three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    const scores = [0, 0, 0];
    
    for(let i = 0; i < answers.length; i++){
        if(answers[i] == person_one[i % person_one.length]){
            scores[0]++;
        }
        if(answers[i] == person_two[i % person_two.length]){
            scores[1]++;
        }
        if(answers[i] == person_three[i % person_three.length]){
            scores[2]++;
        }
    }
    
    const maxScore = Math.max(...scores);
    for(let i = 0; i < 3; i++){
        if(maxScore == scores[i]){
            answer.push(i+1);
        }
    }
    
    return answer;
}