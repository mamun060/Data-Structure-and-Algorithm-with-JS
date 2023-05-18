// two sum algorithm ... problem solved using two pointer algorithm

const nums = [2,7,11,15], target = 9;

function twoSum(nums, target){
    let start = 0;
    let end = nums.length - 1;
    for( let i = 0; i < nums.length ; i++){
        if( nums[start] + nums[end] === target){
            return [start, end]
        } else if (nums[start] + nums[end] > target){
            end--;
        } else {
            start++;
        }
    }

}


console.log(twoSum(nums , target));