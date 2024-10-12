function solution(s) {
    var answer = '';
    let mx = s.split(" ");
    answer = Math.min(...mx) + ' ' + Math.max(...mx);
    return answer;
}