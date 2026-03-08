function slideWindow(arr, k){
    let slideWindowSum = 0;
    for(let i = 0; i < k; i++) {
        slideWindowSum = slideWindowSum + arr[i];
    }

    return slideWindowSum;
}

const arr = [1, 3, 2, 6, -1, 4, 1, 8, 2];
const k = 3;
console.log(slideWindow(arr, k));