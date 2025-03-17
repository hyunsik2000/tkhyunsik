/*
94 60 60
95 90 65
96 120 70
*/
function solution(progresses, speeds) {
    var answer = [];
    let days = progresses.map((progress, index) => 
        Math.ceil((100 - progress) / speeds[index])
    );
    let count = 1;
    let maxDays = days[0];
    
    for(let i = 1; i < days.length;i++){
        if(days[i] <= maxDays){
            count++;
        }
        else {
            answer.push(count);
            maxDays = days[i];
            count = 1;
        }
    }
    answer.push(count);
    return answer;
}