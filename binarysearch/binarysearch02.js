// implementation of Binary search algorithm
const arr = [10,20,30,40,50,60,70,80,90,100];

const target = 80;

let start = 0;
let end = arr.length;
let mid;

function binarySearch(arry, target){
    mid = Math.floor( ( start + end ) / 2);
    for( var i = 0; i < arry.length ; i ++){
        if( arry[i] === target ){
            return `${arry[i]} is index of ${i}`;
        } else if ( mid < target ){
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return -1;
}

console.log(binarySearch(arr, target));