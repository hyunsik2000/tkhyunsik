function solution(clothes) {
    var answer = 0;
    var parts = {};
    
    for (let i = 0; i < clothes.length;i++){
        const [name, type] = clothes[i];
        parts[type] = (parts[type] || 0) + 1;
    }
    
    let result = 1;
    for (const type in parts) {
        result *= (parts[type] + 1);
    }
    return result - 1;
}