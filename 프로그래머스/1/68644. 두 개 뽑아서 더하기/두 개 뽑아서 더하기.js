function solution(numbers) {
    var answer = [];
    var count = 0;
    while(count !== numbers.length -1){
    for(let i = count + 1; i < numbers.length; i++){
        let num = numbers[count] + numbers[i];
        if(answer.indexOf(num) !== -1){
            continue;
        }
        answer.push(num);
    }
        count++;
    }
    return answer.sort((a,b) => (a-b));
}