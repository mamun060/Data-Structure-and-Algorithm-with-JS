// we can implement linear search following veriouse technique
let arr = [4,5,6,7,0,1,2];

const target = 0;

function linearserach(arr, findvalue){
    for( i = 0; i < arr.length ; i++){
        if(arr[i] == findvalue){
            return `Your Target Value Index is : ${i}`;
        }
    }

    return `Not Found ${target}`
}


console.log(linearserach(arr, target));