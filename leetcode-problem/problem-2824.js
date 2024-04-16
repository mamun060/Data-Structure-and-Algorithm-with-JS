// 2824. Count Pairs Whose Sum is Less than Target
// Given a 0-indexed integer array nums of length n and an integer target, 
// return the number of pairs (i, j) where 0 <= i < j < n and nums[i] + nums[j] < target.


const nums = [-1,1,2,3,1], target = 2;


function countPairs(nums, target){
    nums.sort((a, b) => a - b); // Sort the array
    
    let count = 0;
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        if (nums[left] + nums[right] < target) {
            // If the sum is less than target, all pairs between left and right will also be less than target
            count += right - left;
            left++; // Move the left pointer to the right
        } else {
            // If the sum is greater than or equal to target, decrement the right pointer
            right--;
        }
    }
    
    return count;
}


const value = countPairs(nums, target);
console.log(value)