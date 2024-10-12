function solution(A,B){
    var answer = 0;
    let newA = A.sort((a,b) => a - b);
    let newB = B.sort((a,b) => b - a);
    
    for (let i = 0; i < A.length; i++){
        answer += newA[i] * newB[i];
    }
    return answer;
}