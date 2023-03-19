// linear search implementation 

const arr = [4,8,7,9,6,4,8,5,2];

const target = 8;

function linearsearch( arr , target){
    for(let i = 0; i < arr.length ; i++){
        if(arr[i] === target){
            return `${target} your targeted value index is ${i}`
        }
    }
    return -1;
}


console.log(linearsearch(arr, target));