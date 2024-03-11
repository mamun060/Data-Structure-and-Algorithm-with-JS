const arr = [1,1,2]

function removeDuplicated(nums){
    let count = 1; // Initialize the count of unique elements to 1
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[count - 1]) {
        nums[count] = nums[i];
        count++;
        }
    }
  return count;
}


// function removeDuplicated(nums){
//     let unique = [];
//     nums.forEach(element => {
//         if(!unique.includes(element)){
//             unique.push(element)
//         }
//     });
//     return unique;
// }


// function removeDuplicated(nums){
//     const newArr =  [...new Set(nums)]
//     return newArr
// }


const test = removeDuplicated(arr);
console.log(test);

