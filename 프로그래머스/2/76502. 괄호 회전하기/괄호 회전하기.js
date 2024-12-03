function solution(s) {
    function isValid(str){
        var stack = [];
        var match = {"(" : ")", "[" : "]", "{" : "}"};
       
        for(let char of str){
            if(char === "(" || char === "[" || char === "{"){
                stack.push(char);
            } else {
                if(stack.length === 0 || match[stack.pop()] !== char){
                    return false;
                }
            }
        }
        return stack.length === 0;
    }
    
    var count = 0;
    
    for(let i = 0; i < s.length; i++){
        let newStr = s.slice(i) + s.slice(0,i);
        if(isValid(newStr)){
            count++;
        }
    }
    
    return count;
}
