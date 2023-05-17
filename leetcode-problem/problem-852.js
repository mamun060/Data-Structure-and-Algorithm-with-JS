const arr = [3,4,5,1];
const arr02 = [0,2,1,0];

function mountainArry(arr){
    let start = 0;
    let end = arr.length - 1;
    
    for( let i = 0; i < arr.length ; i++){
        let mid = Math.floor(( start + end ) / 2 );
        if( arr[mid] > arr[mid - 1] && arr[mid] > arr[ mid + 1 ]){
            return mid;
        } else if ( arr[mid] < arr[mid + 1]){
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return -1;
}


console.log(mountainArry(arr));