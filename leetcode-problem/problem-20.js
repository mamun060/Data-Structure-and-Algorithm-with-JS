// function isValid(s){
//     if( s === "()" || s === "[]" || s === "{}" || s === "()[]{}" || s === "{[]}" || s === "({[]})" || s === "([])" || s ==="(([]){})"){
//         return true
//     } else {
//         return false
//     }
// }


function isValid(s){
    const stack = [];
    const mappings = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            const topElement = stack.pop();
            if (topElement !== mappings[char]) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
}

console.log(isValid(")"))