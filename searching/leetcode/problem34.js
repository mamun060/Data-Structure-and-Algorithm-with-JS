let nums = [5,7,7,8,8,10]
const target = 8

function searchRange( nums, target){
    for ( i = 0 ; i< nums.length ; i++){
        if( nums[i] == target ){
            return nums[i];
        }
    }
    return [-1, -1];
}

console.log(searchRange(nums, target));