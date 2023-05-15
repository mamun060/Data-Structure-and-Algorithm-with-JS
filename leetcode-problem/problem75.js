// this solution using bubble sort algorithm
let nums = [2,0,2,1,1,0]

function bubblesort(arr){
    for( let i = 0; i < arr.length ; i++){
        for( let j = i ; j < arr.length ; j++){
            if( arr[i] > arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp
            }
        }
    }

    return -1;
}

bubblesort(nums);

console.log(nums);