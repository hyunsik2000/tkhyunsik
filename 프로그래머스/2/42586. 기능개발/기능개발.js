function solution(progresses, speeds) {
    const days = progresses.map((progress,i) => Math.ceil((100 - progress) / speeds[i]));
    const answer = [];

    let currentMax = days[0];
    let count = 1;
    
    for(let i = 1; i < days.length; i++){
        if(days[i] > currentMax){
            currentMax = days[i];
            answer.push(count);
            count = 1;
        } else {
            count++;
        }
    }
    
    answer.push(count);
    return answer;
}