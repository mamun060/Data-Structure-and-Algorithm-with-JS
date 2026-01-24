// in hight level languages like JavaScript, 
// we don't have direct access to memory addresses like in lower-level languages such as C or C++. 
// However, we can simulate pointer-like behavior using references to objects or arrays.

function singlePointer(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

const array = [10, 20, 30, 40, 50];
singlePointer(array);

// In this example, the variable 'arr' acts like a pointer to the original array.