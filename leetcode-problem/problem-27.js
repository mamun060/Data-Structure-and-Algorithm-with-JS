const arr = [3,2,2,3]
const value = 3;

function removeElement(nums, value){
    let k = 0;
    for( i = 0; i < nums.length ; i++ ){
        if(nums[i] !== value){
            nums[k] = nums[i];
            k++;
        }
    }
    return k
}

const test = removeElement(arr, value);

console.log(test)