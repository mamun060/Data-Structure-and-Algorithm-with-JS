// Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. 
// The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.
// Mane jokhon pasapasi element compare korbe tokhon jodi paser element ta small hoye taholei only swar hobe either hobena

let arr = [ 9, 7, 8, 4, 65, 4, 5, 5, 84, 8, 99, 10, 11, 144, 150];

// Ascending order insertion sort 

function selectionSort(arr){
    let i, j, temp;
    for( i = 0; i < arr.length ; i++){
        for( j = i ; j < arr.length ; j++){
            if( arr[i] > arr[j] && arr[i+1] > arr[j]){
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp
            }
        }
    }

}

selectionSort(arr);

console.log(arr);