function solution(d, budget) {
    let sum = 0;
    let i = 0;
    d.sort((a,b) => (a - b));
    
    while (i < d.length){
    sum += d[i];
    if(sum > budget){
        break;
    }
    i++
    }
    return i;
}