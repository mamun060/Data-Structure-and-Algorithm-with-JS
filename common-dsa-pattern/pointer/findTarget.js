function findTargetvalue(arr, target){
    let left = 0;
    let right = arr.length - 1;
    while( left < right ){
        let sum = arr[left] + arr[right];
        if( sum === target){
            return [left, right];
        } else if (sum < target){
            left++;
        } else {
            right--;
        }
    }
    return null;
}

const numbers = [2, 7, 11, 15];
const target = 9;
const result = findTargetvalue(numbers, target);
console.log(result); 