const arr = [1,2,4,5,6,7,8,9,10];
const n = arr.length;

function findMissingNo(arr, n){
    let newArr =  [];
    let i;
    let missingNo = 0;
    for( i = 0 ; i < n ; i++){
        newArr[i] = 0;
    }

    for( i = 0; i < n ; i++){
        newArr[arr[i] - 1] = 1;
    }

    for( i = 0; i <= n; i++){
        if(newArr[i] == 0){
            missingNo = i + 1;
        }
    }

    return missingNo;
}

console.log(arr)
console.log(findMissingNo(arr, n));