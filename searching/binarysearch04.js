// Binary search implementation in Decending order Data

const myarr = [100,90,80,70,60,50,40,30,20,10];
const target_Value = 60;

// binary search machanism 
let start = 0;
let end = myarr.length - 1;
let mid;
let i = 0;


function binarysearch(arr, target){
    for( i ;  i < arr.length ; i++){
        mid = Math.floor(( start + end ) / 2 );
        if( arr[mid] === target){
            return mid;
        }
        else if ( arr[mid] <= target){
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }

    return `Not Found!`;
}


console.log( binarysearch(myarr, target_Value));


