let nums = [5,7,7,8,8,10]
const target = 8

function searchRange( nums, target){
    let start = 0;
    let end = nums.length - 1;
    let mid;
    let result = [-1 , -1];
  
    while( start <= end){
        
        mid = Math.floor( start / 2 + end / 2);
        if( nums[mid] < target){
            start = mid + 1 ;
        } else {
            end = mid - 1 ;
        }
    }


    return result;
}

console.log(searchRange(nums, target));