const nums = [4,1,2,1,2];

function singleNumber(s){
    let result = 0;
    
    for (let num of nums) {
        result ^= num; // XOR operation
    }
    
    return result;
}


const value = singleNumber(nums)
console.log(value)