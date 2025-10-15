function solution(x) {
    var answer = 0;
    let m = String(x)
    for (let i = 0; i < m.length; i++){
        answer += Number(m[i]);
        console.log(m[i]);
    }
    if(x % answer === 0){
        return true;
    }
    else{ return false;}
}