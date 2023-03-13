// let practice binary search in multiple way
// we know binary search follows devide and conqure systems to find the exact solution but array or likedlist must be sorted where you applay binary search technique

const arr = [100, 90, 80, 70, 60 , 50, 40, 30, 20, 10];

const target = 90;
let start = 0;
let end = arr.length - 1;
let mid;

// it's login work for ascending order array 

    function binarysearch(arr, target){
        while( start <= end){
            mid = Math.floor(( start + end ) / 2);

            if(arr[mid] === target){
                return `Your target values index is ${mid}`;
            }
            
            else if( arr[mid] <= target){
                end = mid - 1;
            }
            
            else {
                start = mid + 1;
            }

        }
    
        return -1;
    }


console.log( binarysearch(arr, target));