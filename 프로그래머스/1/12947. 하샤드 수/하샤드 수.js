function solution(x) {
    var answer = 0;
    let m = x.toString();
    for (let i = 0; i < m.length; i++){
        answer += parseInt(m[i]);
        console.log(m[i]);
    }
    if(x % answer === 0){
        return true;
    }
    else{ return false;}
}