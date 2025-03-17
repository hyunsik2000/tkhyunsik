function solution(arr)
{
    var answer = [];
    let index = 0;
    answer.push(arr[0]);
    
    for(let i = 1; i < arr.length; i++){
        if(answer[index] === arr[i]){
            continue;
        }
        answer.push(arr[i]);
        index++;
    }
        
    return answer;
}