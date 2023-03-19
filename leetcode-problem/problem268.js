// Missing number

function missingNumber(nums){
    let result = 0;
    for( let i = 0; i < nums.length ; i++){
        result +=nums[i] - i;
    }
    
    return nums.length - result;
}




console.log(missingNumber([9,6,4,2,3,5,7,0,1]));