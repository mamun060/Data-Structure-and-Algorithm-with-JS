function minSubArray(arr){
    let minSubArray = arr[0];
    let globalMin = arr[0];
    for(let i = 0; i < arr.length; i++){
        globalMin = Math.min(arr[i], globalMin + arr[i]);
        minSubArray = Math.min(minSubArray, globalMin);
    }
    return minSubArray;
}

const arr = [2, 3, -8, 7, -1, 2, 3];
console.log(minSubArray(arr));