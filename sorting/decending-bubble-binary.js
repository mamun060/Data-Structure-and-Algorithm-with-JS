// let's write a code for Dscending order first then find accurate data

let arr = [ 55, 88, 44, 7, 8, 152, 140, 130, 120, 145, 150]

function descendingOrder(arr){
    for( let i = 0; i < arr.length ; i++){
        for( let j = i; j <= arr.length ; j++){
            if( arr[i] < arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

descendingOrder(arr);

const target = 130;
let start = 0;
let end = arr.length - 1;
let mid;

function DscBinary( arr, target){
    for( let i = 0; i <= arr.length - 1 ; i++){
        mid = Math.floor(( start + end ) / 2);
        if( arr[mid] === target){
            return `${target} number index is ${mid}`
        } else if ( arr[mid] <= target ){
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return -1;
}

console.log(arr);
console.log(DscBinary( arr, target));