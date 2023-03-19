// Let's implement selection sort .. basically Selection sort find smallest element for compare and swap position 

let arr = [ 9, 7, 8, 4, 65, 4, 5, 5, 84, 8, 99, 10, 11, 144, 150];

function selectionSort(arr){
    for( let i = 0; i < arr.length ; i++){
        let minIndex = i;
        for( let j = i; j < arr.length ; j++){
            if(arr[j] <= arr[minIndex]){
                minIndex = j;
            }
        }

        // Now Swap the value
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}       


const a = [1, 2, 3]
const b = [4, 5, 6]
const c = a + b

selectionSort(arr);

console.log(arr, c);