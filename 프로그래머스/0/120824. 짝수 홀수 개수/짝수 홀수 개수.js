function solution(num_list) {
    return [num_list.reduce((acc,cur) => acc + (cur % 2 === 0 ? 1 : 0), 0), num_list.reduce((acc, cur) => acc + (cur % 2 === 1 ? 1 : 0), 0)];
}