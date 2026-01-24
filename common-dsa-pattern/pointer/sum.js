function arraySum(arr){
    let sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }

    return sum;
}

const numbers = [5, 10, 15, 20, 25];
const result = arraySum(numbers);
console.log(result); 