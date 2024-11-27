function solution(nums) {
    var answer = 0;
    var Poncketmon = nums.sort((a,b) => a - b);
    var newNums = new Set();
    
    for (let i = 0; i < nums.length; i++){
        newNums.add(Poncketmon[i]);
        if(newNums.size == nums.length / 2){
            return newNums.size;
        }
    }
    
    return newNums.size;
}