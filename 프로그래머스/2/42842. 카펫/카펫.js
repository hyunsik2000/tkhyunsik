function solution(brown, yellow) {
    brown = (brown-4) / 2;
    var a,b;
    for(a = yellow; a > 0; a--){
        if(yellow % a === 0){
            b = yellow / a;
            if(a + b === brown){
                console.log(a+b);
                if(a > b){
                return [a+2,b+2];
                }
                else {return [b+2,a+2];}
            }
        }
    }
}