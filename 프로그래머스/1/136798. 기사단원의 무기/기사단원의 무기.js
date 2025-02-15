function solution(number, limit, power) {
    var answer = 0;
    var attack = [];
    
    function sup(number){
        let count = 0;
        let index = 1;
        while (index <= number / 2) {
            if (number % index === 0) count++;
            index++;
        }
        return count + 1;
    } 
    
    for(let i = 1;i < number + 1;i++){
        let char = sup(i);
        if(char < limit + 1){
            answer += char;
        }
        else {
            answer += power;
        }
        
    }
    
    
    return answer;
    
}