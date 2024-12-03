function solution(s) {
 
    function isValid(str) {
        const stack = []; 
        const matching = { '(': ')', '[': ']', '{': '}' };

        for (let char of str) {
            if (char === '(' || char === '[' || char === '{') {
                stack.push(char);
            } else {
                if (stack.length === 0 || matching[stack.pop()] !== char) {
                    return false;
                }
            }
        }
        return stack.length === 0;
    }
    let count = 0;
    let len = s.length;
    
    for (let i = 0; i < len; i++) {
        let rotated = s.slice(i) + s.slice(0, i); 
        if (isValid(rotated)) {
            count++; 
        }
    }
    return count; 
}
