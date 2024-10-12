function solution(s) {
    var answer = '';
    let mx = s.split(" ").map(Number);
    answer = Math.min(...mx) + ' ' + Math.max(...mx);
    return answer;
}