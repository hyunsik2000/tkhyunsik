function solution(arr) {
    
    function gcd(a,b){
        while(b !== 0){
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    
    function lcm(a,b){
        return (a * b) / gcd(a,b);
    }

    return arr.reduce((acc, current) => lcm(acc, current));
}