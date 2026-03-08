function findMaxSubArray(arr) {
    let maxSoFar = arr[0];
    let maxCurrent = arr[0];
    for (let i = 1; i < arr.length; i++) {
        maxCurrent = Math.max(arr[i], maxCurrent + arr[i]);
        maxSoFar = Math.max(maxSoFar, maxCurrent);
    }
    return maxSoFar;
}

function findMinSubArray(arr) {
    let minSoFar = arr[0];
    let minCurrent = arr[0];
    for (let i = 1; i < arr.length; i++) {
        minCurrent = Math.min(arr[i], minCurrent + arr[i]);
        minSoFar = Math.min(minSoFar, minCurrent);
    }
    return minSoFar;
}

const arr = [2, 3, -8, 7, -1, 2, 3];
console.log(findMaxSubArray(arr));
console.log(findMinSubArray(arr));