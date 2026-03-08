function getChunksOfThree(arr, k){
    let result = [];
    for(let i = 0; i < arr.length; i = i + k){
        let chunk = arr.slice(i, i+k);
        let sum = chunk.reduce((a, b) => a + b, 0);
        result.push(sum);
    }
    return result;
}

const arr = [1, 3, 2, 6, -1, 4, 1, 8, 2];
const k = 3;
console.log(getChunksOfThree(arr, k));