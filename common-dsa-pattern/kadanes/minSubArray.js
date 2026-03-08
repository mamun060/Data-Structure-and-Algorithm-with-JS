function minSubArray(arr){
    let minSubArray = arr[0];
    for(let i = 0; i < arr.length; i++){
        minSubArray = Math.min(arr[i], minSubArray + arr[i]);
    }
    return minSubArray;
}

const arr = [2, 3, -8, 7, -1, 2, 3];
console.log(minSubArray(arr));