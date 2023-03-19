// Binary search implementation. Remember if you want to implementation binary search must be your array is sorted whatever Ascending or Decending order

const arr = [5,6,7,8,9,40,50,60,70,80,90,100];
const target = 90;

// needs some extra variable for binary search implementation
let start = 0;
let end = arr.length - 1;
let mid = 0;

function binarysearch(arr , target){
    for( let i = 0; i < arr.length ; i++){
        mid = Math.floor( ( start + end ) / 2);

        if(arr[mid] === target){
            return `${target} value ar index holo ${mid}`;

        } else if( arr[mid] <= target){
            start = mid + 1;

        } else {
            end = mid - 1;
        }
    }

    return -1;
}

console.log(binarysearch( arr, target ));