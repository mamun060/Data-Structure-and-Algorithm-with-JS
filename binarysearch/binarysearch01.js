// let practice binary search in multiple way
// we know binary search follows devide and conqure systems to find the exact solution but array or likedlist must be sorted where you applay binary search technique

const arr = [10,20,30,40,50,60,70,80,90,100];
const target = 90;
let start = 0;
let end = arr.length - 1;
let mid;

function binarysearch(arr, target){
    while( start <= end){
        mid = Math.floor(( start + end ) / 2);
        if(arr[mid] === target){

            return `Your target values index is ${mid}`;

        } else if( arr[mid] <= target){
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }


    return -1;
}

console.log( binarysearch(arr, target));