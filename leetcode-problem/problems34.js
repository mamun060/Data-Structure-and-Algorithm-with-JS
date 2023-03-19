var searchRange = function (nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let result = [-1, -1];
    let mid;

    while ( start <= end ) {
      mid = Math.floor( start / 2 + end / 2);
      nums[mid] < target ? (start = mid + 1) : ( end = mid - 1);
    }

    if (nums[start] !== target) {
        return result
    }

    result[0] = start;
    end = nums.length - 1;

    while (start <= end) {
      const mid = Math.floor( start / 2 + end / 2);
      if(nums[mid] <= target ){
         start = mid + 1;
      } else {
        end = mid - 1
      }
    }

    result[1] = end;
    return result;
};

let nums = [5,7,7,8,8,10]
const target = 8

console.log(searchRange(nums, target));