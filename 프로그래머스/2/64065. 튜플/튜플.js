function solution(s) {
    var answer = [];
    
    s = s.slice(2, s.length - 2);
    const groups = s.split("},{");
    
    groups.sort((a, b) => a.split(',').length - b.split(',').length);
    
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