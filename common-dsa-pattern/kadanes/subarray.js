function maxSubArray(arr){
    let maxSoFar = arr[0];
    let maxCurrent = arr[0];
    for(let i = 0; i < arr.length; i++){
        maxCurrent = Math.max(arr[i], maxCurrent + arr[i]);
        maxSoFar = Math.max(maxSoFar, maxCurrent);
    }
    return maxSoFar;
}

const arr = [2, 3, -8, 7, -1, 2, 3];
console.log(maxSubArray(arr));