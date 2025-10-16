function solution(n) {
    var answer = 0;
    
    return n.toString().split('').reduce((acc,cur) => acc += parseInt(cur), 0);
}