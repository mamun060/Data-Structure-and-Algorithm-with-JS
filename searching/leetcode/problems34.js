var searchRange = function (nums, tar) {
    let l = 0;
    let r = nums.length - 1;
    let result = [-1, -1];
    let mid;

    while (l <= r) {
      mid = Math.floor(l / 2 + r / 2);
      nums[mid] < tar ? (l = mid + 1) : (r = mid - 1);
    }

    if (nums[l] !== tar) {
        return result
    }

    result[0] = l;
    r = nums.length - 1;

    while (l <= r) {
      const mid = Math.floor(l / 2 + r / 2);
      if(nums[mid] <= tar ){
         l = mid + 1;
      } else {
        r = mid - 1
      }
    }

    result[1] = r;
    return result;
};

let nums = [5,7,7,8,8,10]
const target = 8

console.log(searchRange(nums, target));