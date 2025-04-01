function solution(citations) {
    var answer = 0;
    
    citations.sort((a,b) => b - a);

    for(let i = 0; i < citations.length; i++){
        if(answer < citations[i]){
            answer++;
        }
        else if(answer === citations[i]){
            return answer;
        }
    }
    
    return answer;
}