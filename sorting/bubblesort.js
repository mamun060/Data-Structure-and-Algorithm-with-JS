// bubble sort is technique for sorting ascending or descending order data by comparing there sibling data


// so let's write bubble sort code for Ascending Order Data

let arr = [ 9, 7, 8, 4, 65, 4, 5, 5, 84, 8, 99, 10, 11, 144, 150];

function bubblesort(arr){
    for( let i = 0; i < arr.length ; i++){
        for( let j = i; j < arr.length ; j++){
            if( arr[i] > arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

bubblesort(arr);

console.log(arr);