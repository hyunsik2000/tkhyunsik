function solution(price, money, count) {
    var answer = -1;
    for(let i = 1; i <= count; i++){
        money -= price * i;
    }
    if (money < 0){
        return money * -1;
    }
    else {return 0;}
}