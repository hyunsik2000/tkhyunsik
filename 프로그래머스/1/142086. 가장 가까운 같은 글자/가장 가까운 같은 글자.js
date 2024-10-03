function solution(s) {
    var answer = [];
    let lastSeen = {};
    
    for (let i = 0; i < s.length; i++){
        if(lastSeen[s[i]] !== undefined){
            answer.push(i - lastSeen[s[i]]);
        } else { answer.push(-1); }
        lastSeen[s[i]] = i;
    }
    
    return answer;
}