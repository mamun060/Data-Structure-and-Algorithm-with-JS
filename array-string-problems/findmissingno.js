// Find the missing number in an array of integers
// Explanation: Here the size of the array is 8, so the range will be [1, 8]. The missing number between 1 to 8 is 5

const arr = [1,2,3,5,6,7,8];
const n = arr.length;

function findMissingNo(arr, n){
    let temp = [];
    for(let i = 0; i < n;  i++){
        temp[i] = 0;
    }

    for( let i = 0; i < n ; i++){
        temp[arr[i] - 1 ] = 1;
    }

    let ans = 0;
    for( let i = 0; i <=n ; i++){
        if(temp[i] == 0){
            ans = i + 1;
        }
    }
    return ans;
}

console.log(findMissingNo(arr, n));