function solution(n) {
    var answer = [];
    let m = n.toString();
    for (let i = 0; i < m.length;i++)
    {
        let newInt = parseInt(m[i]);
        answer.push(newInt);
    }
    answer.reverse();
    return answer;
}