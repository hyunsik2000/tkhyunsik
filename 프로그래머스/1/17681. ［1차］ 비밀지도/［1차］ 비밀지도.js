function solution(n, arr1, arr2) {
    var answer = [];
    for(let i = 0; i < n; i++){
        var binary = (arr1[i] | arr2[i]).toString(2).padStart(n, '0');
        var ans = "";
        for(let j = 0; j < n; j++){
            if(binary[j] === "1"){
                ans += "#";
            } else {
                ans += " ";
            }
        }
        answer.push(ans);
    }
    return answer;
}
