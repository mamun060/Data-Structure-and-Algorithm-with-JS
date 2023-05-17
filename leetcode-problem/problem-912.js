// sorted array using selection sort

const nums = [5,1,1,2,0,0];

function problem(nums){
    for( let i = 0; i < nums.length ; i++){
        let minIndex = i;

        for( let j = i; j < nums.length ; j++){
            if( nums[j] < nums[minIndex]){
                minIndex = j
            }
        }
        let temp = nums[i];
        nums[i] = nums[minIndex];
        nums[minIndex] = temp;

    }

    return -1;
}

problem(nums);

console.log(nums);