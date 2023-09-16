const array = [500, 10,20,30,40,50,60];

function maxfind(arr){
    for( let i = 0; i < arr.length ; i++){
        if(arr[0] < arr[i]){
            arr[0] = arr[i]
        }
    }
    return arr[0];
}


console.log(maxfind(array));
