function solution(food) {
    var answer = '';
    for(let i = 1; i < food.length; i++){
        let char = food[i];
        if(food[i] % 2 === 1 && food[i] > 1){
            food.splice(i,1,food[i]-1);
        }
        answer += i.toString().repeat(char / 2);
    }
    answer += "0";
    for(let i = food.length; i > 0; i--){
        let char = food[i];
        answer += i.toString().repeat(char / 2);
    }
    return answer;
}