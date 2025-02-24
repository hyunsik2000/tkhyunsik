function solution(s) {
    var answer = [];
    
    const groups = s.slice(2,-2).split("},{").sort((a,b) => a.split(",").length - b.split(",").length);
    
    groups.forEach((group, index) => {
        group.split(",").forEach(char => {
            char = parseInt(char);
            if(!answer.includes(char)){
                answer.push(char);
            }
        })
    })
    
    return answer;
}