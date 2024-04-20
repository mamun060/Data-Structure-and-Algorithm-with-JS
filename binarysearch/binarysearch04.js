// lets impplement binary search algorithm 

function binarySearch(n, target){
    let start = 0;
    let end = n.length - 1;
    let mid;
    for( i = 0; i < n.length ; i++){
        mid = Math.floor((start + end) / 2);

        if(n[mid]=== target){
            return mid;
        } else if(n[mid] < target){
            start = mid + 1
        }else {
            end = mid - 1
        }
    }

    return -1;
}

const arr = [10,20,30,40,50,60,70,80,90,100,110,120,130,140,150];
const target = 90;

console.log(binarySearch(arr, target))

