function solution(number, k) {
    var answer = '';
    number.split('');
    let stacks = [];

    for(let i = 0; i < number.length; i++){
        
        while(k > 0 && stacks[stacks.length - 1] < number[i]){
            stacks.pop();
            k--;
        }
        stacks.push(number[i]);
    }
    
    stacks.splice(stacks.length - k, k);
    
    return stacks.join('');
}