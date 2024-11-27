function solution(nums) {
    var newNums = new Set(nums.sort((a,b) => a - b));
    
    return (newNums.size > nums.length / 2) ?  nums.length / 2 : newNums.size;
}