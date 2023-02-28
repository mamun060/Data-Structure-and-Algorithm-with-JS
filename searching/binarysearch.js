const nums = [5,7,7,8,8,10];
const target = 8;

function binarysearch(nums , target){
    let start = 0;
    let end = nums.length - 1;
    let mid=[];
    while( start <= end){
        mid = Math.floor(( start + end) / 2);
        if( nums[mid] === target){
            return mid;
        } else if( nums[mid] <= target){
            start = mid +1;
        } else {
            end = mid - 1;
        }
    }

    return [-1,-1];
}

console.log(binarysearch( nums, target));