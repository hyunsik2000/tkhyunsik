function solution(want, number, discount) {
    var answer = 0;

    for (let i = 0; i <= discount.length - 10; i++){
        var goods = {};
        for (let k = 0; k < want.length; k++){
            goods[want[k]] = number[k];
        }
        for(let j = i; j < i + 10; j++){
            goods[discount[j]]--;
        }
        if (Object.values(goods).every(value => value === 0)) {
            answer++;
        }
    }
    return answer;
}