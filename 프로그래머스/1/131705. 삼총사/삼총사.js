function solution(number) {
    var answer = 0;
    number.sort((a,b) => (a - b));
    for (let i = 0; i < number.length - 2; i++){
        let sum = 0;
        for(let j = i + 1; j < number.length - 1; j++){
            for(let k = j + 1; k < number.length; k++){
                if(number[i] + number[j] + number[k] === 0){
                    answer++;
                }
            }
        }
    }
    return answer;
}