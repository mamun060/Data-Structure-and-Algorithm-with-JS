function windowMaximum(arr, k) {
    let result = [];
    for (let i = 0; i <= arr.length - k; i++) {
        let currentWindow = arr.slice(i, i + k);
        result.push(Math.max(...currentWindow));
    }
    return result;
}

const arr = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;
console.log(windowMaximum(arr, k));