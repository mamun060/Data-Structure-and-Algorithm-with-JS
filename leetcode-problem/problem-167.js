// two some algorith

let arr = [2,7,11,15], target = 9; 

function twoSum(arr, target) {
    let a = 0; 
    let b = arr.length - 1; 

    for( let i = 0; i < arr.length ; i++) { 
        let sum = arr[a] + arr[b]; 
        if(sum === target) {
            return [a+1, b+1]; 
        } 
        else if(sum > target) {
            b--; 
        } 
        else {
            a++; 
        }
    }
}

console.log(twoSum(arr, target));