 // hider order function - জাভাস্ক্রিপ্টে higher order function holo sei function jeh function tar argument hisabe funciton receive kore or function kaj shes kore function return kore

 function add(a,b){
    return a+b;
}

function manipulate( a, b, func){
    return func(a,b);
}

const finalResult = manipulate( 5, 6, add);
console.log(finalResult);
