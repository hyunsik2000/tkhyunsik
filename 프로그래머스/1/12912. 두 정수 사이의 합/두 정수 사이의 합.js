function solution(a, b) {
    var answer = 0;
    if(a < b){
    for (a ; a <= b; a++){
        answer += a;
    }
    }
    else{
        for(a ; a >= b;  a--){
            answer += a;
        }
    }
    return answer;
}