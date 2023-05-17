// selection work by find smallest or largest element from the unsorted array and move it to sorted array

let arr = [ 9, 7, 8, 4, 65, 4, 5, 5, 84, 8, 99, 10, 11, 144, 150];

function selectionSort(arr){
    for( let i = 0; i < arr.length ; i++){
        let minimumIndex = i;
        
        // find the largest element from the array
        for( let  j = i ; j < arr.length ; j++){
            if( arr[j] > arr[minimumIndex] ){
                minimumIndex = j;
            }
        }

        let temp = arr[i];
        arr[i] = arr[minimumIndex];
        arr[minimumIndex] = temp
    }

    return -1;
}


selectionSort(arr);

console.log(arr);