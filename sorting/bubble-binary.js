let arr = [565, 56, 4545, 545,4545, 45 ,45,454  ,454, 545,45,45 ,4];

const target = 545;
let start = 0;
let end = arr.length - 1;
let mid;

function dataAscOrder(arr){
    for(let i = 0 ; i < arr.length ; i++){
        for( let j = i; j < arr.length ; j++){
            if( arr[i] > arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

dataAscOrder(arr);

function binarySearch ( arr, target){
    while ( start <= end ){
        mid = Math.floor(( start + end ) / 2 );
        if( arr[mid]=== target){
            return `${target} number index is ${mid}`
        } else if( arr[mid] <= target){
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return -1;
}

console.log(binarySearch(arr, target));
