// missing number problem

// technique for find missing number ... First sum of all array element then substruction of array.length to total sum of array element


const arr = [9,6,4,2,3,5,7,0,1];

function missingNumber(arr){
    let totalSum = 0;
    for(let i = 0; i < arr.length ; i++){
        totalSum = totalSum + ( arr[i] - i ) ;
    }
    return  arr.length - totalSum;
}

console.log(missingNumber(arr));