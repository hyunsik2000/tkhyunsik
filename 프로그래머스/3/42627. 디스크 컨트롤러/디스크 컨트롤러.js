function solution(jobs) {
    var answer = 0;
    let now = 0;
    let turn = 0;
    let sum = 0;
    let lastWork = [];
    
    jobs.sort((a,b)=>a[0]-b[0]);
    
    while(turn < jobs.length || lastWork.length > 0){
        if(turn < jobs.length && now >= jobs[turn][0]){
            lastWork.push(jobs[turn]);
            turn++;
            lastWork.sort((a,b)=> a[1]-b[1]);
            continue;
        }
        if(lastWork.length === 0){
            now = jobs[turn][0]
        } else {
            const first = lastWork.shift();
            sum += now - first[0] + first[1];
            
            now += first[1];
        }
    }
    
    answer = Math.floor(sum / jobs.length);
    
    return answer;
}