// Binary search implementation another way

const arr = [10,20,30,40,50,60,70,80,90,100,110,120,130,140,150];
const target = 90;

function binarysearch(arr, target){
    let start = 0;
    let end = arr.length - 1;
    let mid;
    
    for( let i = 0; i<= arr.length ; i++ ){

        mid = Math.floor( ( start + end ) / 2 );
        
        if( arr[mid] === target){
            return mid;
        } else if ( arr[mid] <= target ){
            start = mid + 1 ;
        } else {
            end = mid - 1 ;
        }
        
    }

    return -1;
}

console.log(  binarysearch(arr, target ) );