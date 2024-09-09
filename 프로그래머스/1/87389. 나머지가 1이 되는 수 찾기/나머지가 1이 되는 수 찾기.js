function solution(n) {
    var answer = 0;
    let x = [];
    for (let i = 2; i < n; i++){
        if(n % i === 1){
            x.push(i);
        }
    }

    x.sort((a,b) => (a - b));
    
    return x[0];
}