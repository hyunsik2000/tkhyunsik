/*
3 9  2 3 4     
3 10 2 3 5 3 1

3 10 3 3 4 

5 13 2 2 3 3 3
*/

function solution(n, s) {
    var answer = [];
    
    if(s < n){
        return [-1];
    }
    
    let num = s % n;
    
    if(num === 0) {
        for(let i = 0; i < n; i++){
            answer.push(s / n);   
        }
    } else {
        for(let i = 0; i < n - num; i++){
            answer.push(Math.floor(s / n));   
        }
        for(let j = 0; j < num; j++){
            answer.push(Math.floor(s / n) + 1);
        }
    }  
    
            return answer;
}