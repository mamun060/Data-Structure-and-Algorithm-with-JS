// In mathmetics, the factorial of a non-negetive integer `n`, denoted by n!, is the product of all positive integer less than or equal to `n`.

const factorial = (n) => {
    let facto = 1;
    for ( let i = 1; i <=n ; i++){
        facto = facto * i
    }
    return facto
}

console.log(factorial(5));