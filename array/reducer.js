// this array method combined all array element and return one value

const arr = [1,2,3,4,5,6];

const value = arr.reduce((total, element)=>{
    return total + element;
}, 0);

console.log(value);

