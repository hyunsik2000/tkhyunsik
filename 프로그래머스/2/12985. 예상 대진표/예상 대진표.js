function solution(n,a,b)
{
    var answer = 1;
    var numA = a;
    var numB = b;
    for(n;n > 1;n /= 2){
        let guessNum = numA - numB;
        if(numA % 2 == 1 && guessNum == -1 || numA % 2 == 0 && guessNum == 1){
            break;
        } else
        {
            numA = Math.ceil(numA / 2);
            numB = Math.ceil(numB / 2);
            console.log(numA);
        }
        answer++;
    }
    return answer;
}
