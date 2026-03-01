// 2D Array 

let twodimension = [
    [1, 3, 5, 7 ],
    [10, 11, 16, 20],
    [23, 30, 34, 60]
];

const target = 3;

function findMatrixValue(arr, target){
    for(let i = 0; i < arr.length ; i++){
        for(let j = 0 ; j< arr[i].length ; j++){
            if(arr[i][j] === target){
                return true;
            }
        }
    }

    return false;
}

const result = findMatrixValue(twodimension, target)

console.log(result);