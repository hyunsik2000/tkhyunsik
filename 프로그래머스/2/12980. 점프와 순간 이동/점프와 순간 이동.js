function solution(n)
{
    var ans = 0;
    while (n > 1){
        if(n % 2 === 1){
        ans++;
        }
        n = Math.floor(n / 2);
    }

    return ans + 1;
}