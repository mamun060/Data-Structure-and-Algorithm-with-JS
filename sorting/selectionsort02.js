// implementation selection sort, Selection is algorithm work process, they find smallest from full array

// Declare a array
const myarray = [4 , 8, 7, 4, 5, 14, 45, 1, 9, 3];

// so write selection sort login implementation
function selectionSort(arr){
    for( let i = 0; i < arr.length ; i++){
        let minIndex = i;
        for( let j = i; j < arr.length ; j++){
            if( arr[j] <= arr[minIndex]){
                minIndex = j;
            }
        }
        
        // lets swap
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp
    }
}

selectionSort(myarray)

console.log(myarray);