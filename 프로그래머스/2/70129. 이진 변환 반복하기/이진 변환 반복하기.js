function solution(s) {
    var answer = [];
    var zeroCount = 0;    
    var doCount = 0;
    while(true){
    doCount++;
    let newArr = s.split("").filter(value => {
        if(value === "0"){
            zeroCount++;
            return false;
        }
        return true;
    }).join("");
        
    s = newArr.length.toString(2);
    if(s === "1"){
     break;      
    }
    }
    return [doCount,zeroCount];
}