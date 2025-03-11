function solution(sequence, k) {
    var answer = [];    
    let posNum = 0;
    let nextNum = 0; 
    let sum = sequence[0];
    let newLength = sequence.length;

    while (posNum <= nextNum) {
        if(sequence[nextNum] === k){
            return [nextNum, nextNum];
        }
        if (sum < k) {
            if(nextNum + 1 >= sequence.length) break;
            sum += sequence[++nextNum];
        }
        else if(sum > k){
            sum -= sequence[posNum++];
        }
        else if (sum === k){
            if(nextNum - posNum < newLength) {
                newLength = nextNum - posNum;
                answer = [posNum, nextNum];
            }
            if(nextNum + 1 >= sequence.length) break;
            sum += sequence[++nextNum];
        }
    }
    return answer;
}
