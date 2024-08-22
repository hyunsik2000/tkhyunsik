function solution(numbers, target) {
    var answer = 0;
    
    const dfs = (numbers, number, total) => { //numbers 배열, 사용할 num의 index, 현재까지의 total 값 
        if (number === numbers.length && total == target){ //numbers를 모두 돌고 total 값이 target과 일치
        answer++;
        return;
        }
        else if (number === numbers.length && total != target){
        return;
        }
    
    //각 다음의 num의 다음 number의 index로 넘어가고 + 와 -의 경우의수를 파악하기 위한 두개의 경우의수 
        dfs(numbers, number+1, total + numbers[number]); 
        dfs(numbers, number+1, total - numbers[number]);
    }
    
    dfs(numbers, 0,0); //numbers의 배열을 받고 초기 number의 인덱스는 0 , 초기 total 값은 0
    
    return answer;
}