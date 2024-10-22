function solution(n) {
    let newN = n.toString(2).split('1').length;
    while(true){
        n++;
        if(newN === n.toString(2).split('1').length){break;}
    }
    return n;
}