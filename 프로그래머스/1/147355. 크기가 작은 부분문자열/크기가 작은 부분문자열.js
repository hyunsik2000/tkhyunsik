function solution(t, p) {
    var answer = 0;
    for(let i = 0; i < t.length + 1 - p.length; i++){
        if(parseInt(t.slice(i,i + p.length)) <= parseInt(p)){
            console.log(t.slice(i,i+p.length));
            answer++;
        }
    }
    return answer;
}