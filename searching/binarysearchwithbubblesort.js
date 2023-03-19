// Binary search implementation with Bubble sort Algorithm

// first array declarre and bubble sort login implementation 
const myarray = [5,8,47,1,5,91,148,1,548,2,165,716,4,546,47,49,52];
let newArr = [...myarray]
const target = 548;

//So, let write bubble sort for Ascending Order 

function bubblesortDecending(arr){
    for( let i = 0 ; i < arr.length ; i++){
        for( let j = i; j < arr.length ; j++){
            if( arr[i] <= arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp
            }
        }
    }
}


// SO, lets write bubble sort for Decending Order Data
function bubblesortAscending(arr){
    for( let i = 0; i < arr.length ; i++){
        for( let j = i ; j < arr.length ; j++){
            if ( arr[i] >= arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

bubblesortAscending(myarray)
bubblesortDecending(newArr)

console.log(myarray, newArr);

// So now write binary search implementation code 

// we need 3 variable 
function binarysearch_ASC(arr, target){
    let start = 0;
    let end = arr.length - 1 ;
    let mid;

    for( let i = 0; i < arr.length ; i++){
        mid = Math.floor( ( start + end ) / 2);
        if( arr[mid] === target){
            return `${target} ar index holo ${mid}\n`;
        } else if ( arr[mid] <= target){
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return -1;
}

// Bubble sort for Decending Order Data
function binarysearch_DSC(arr, target){
    let start = 0;
    let end = arr.length - 1 ;
    let mid;

    for( let i = 0; i < arr.length ; i++){
        mid = Math.floor( ( start + end ) / 2);
        if( arr[mid] === target){
            return `${target} ar index holo ${mid}`;
        } else if ( arr[mid] <= target){
            end = mid - 1 ;
        } else {
            start = mid + 1;
        }
    }

    return -1;
}

console.log( binarysearch_ASC(myarray, target), binarysearch_DSC(newArr, target));