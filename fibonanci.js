// In mathmetics fibonanci sequency is sequency in which each number is the sum of the two precending ones.

const fibonancy = (n) => {
    let fib = [0, 1];
    for( let i = 2; i < n ; i++ ){
        fib[i] = fib[ i - 1 ] + fib[ i - 2]
    }
    return fib
}

console.log(fibonancy(2));


// let's try another one fibonanci

function fibonanciOne(n){
    let fibo = [0, 1];
    for( let i = 2 ; i < n ; i++){
        fibo[i] = fibo[ i - 1 ] + fibo[ i - 2 ];
    }

    return fibo
}

console.log(fibonanciOne(10));



