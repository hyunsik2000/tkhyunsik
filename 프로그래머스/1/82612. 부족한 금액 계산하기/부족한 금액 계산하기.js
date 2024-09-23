function solution(price, money, count) {
    var answer = -1;
    for(let i = 1; i <= count; i++){
        money -= price * i;
    }
    return money < 0 ? money * -1: 0;
}