function solution(numbers) {
    var answer = [];
    var temp = [];
    for(let count = 0; count < numbers.length - 1; count++){
        for(let i = count + 1; i < numbers.length; i++){
            answer.push(numbers[count] + numbers[i]);
        }
    }
    return temp = [... new Set(answer.sort((a,b) => (a-b)))];
}