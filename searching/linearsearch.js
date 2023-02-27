// we can implement linear search following veriouse technique
let arr = [4,5,48,4,544,55,454,5454,77,888,999,888,7777,555,55];

const target = 7777;

function linearserach(arr, findvalue){
    for( i = 0; i < arr.length ; i++){
        if(arr[i] == findvalue){
            return `Your Target Value Index is : ${i}`;
        }
    }

    return `Not Found ${target}`
}


console.log(linearserach(arr, target));