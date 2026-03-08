function maxSubArray(arr, k){
    let maxSum = 0;
    let windowSum = 0;

    for(let i = 0; i< k; i++){
        windowSum += arr[i];
    }

    maxSum = windowSum;
    for(let i = k; i < arr.length; i++){
        windowSum += arr[i] - arr[i-k];
        maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum;
}

const arr = [1, 3, 2, 6, -1, 4, 1, 8, 2];
const k = 3;
console.log(maxSubArray(arr, k)); 