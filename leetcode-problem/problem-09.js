function palindrom(x){
    if( x < 0){
        return false;
    }

    const orginalDigit = x;
    let reverse = 0;

    while( x > 0){
        const digit = x % 10;
        reverse = reverse * 10 + digit;
        x = Math.floor(x / 10);
    }

    return orginalDigit === reverse;
}

const x = 121;
console.log(palindrom(x))