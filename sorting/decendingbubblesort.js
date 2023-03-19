// let's write bubble sort order for Descending order

let arr = [80, 1, 5, 7, 8, 9, 265, 55, 54, 44, 11, 0];

function dscbublesort(arr){
    for( let i = 0 ; i < arr.length ; i++){
        for ( let j = i ; j < arr.length ; j++ ){
            if( arr[i] <  arr[j] ){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

dscbublesort(arr);

console.log(arr);