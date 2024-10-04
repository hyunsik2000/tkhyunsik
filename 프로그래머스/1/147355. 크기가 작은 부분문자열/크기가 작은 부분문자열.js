function solution(t, p) {
    var answer = 0;
    for(let i = 0; i < t.length + 1 - p.length; i++){
        if(t.slice(i,i + p.length) <= p){
            console.log(t.slice(i,i+p.length));
            answer++;
        }
    }
    return answer;
}