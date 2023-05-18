const name = "1010";

function checkPointer(value){
    let j = value.length - 1;
    for( let i = 0; i < j / 2 ; i++){
        let x = value[i];
        let y = value[ j - 1];
        if( x != y ){
            return false;
        }
        return true
    }
}

console.log(checkPointer(name));