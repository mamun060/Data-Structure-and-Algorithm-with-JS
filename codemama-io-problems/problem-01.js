function main (input) {
    let farenheit = ( input * 9 / 5) + 32;
    let result = farenheit.toFixed(2);
    return `The temperature in Fahrenheit is: ${result}`;
}

console.log(main(3));


// #include <stdio.h>
     
// int main() {
//    int calsius;
//    float farenheit;
//    scanf("%d", &calsius);
//    farenheit = ( calsius * 9 / 5) + 32; 
//    printf("The temperature in Fahrenheit is: %.2f", farenheit);  
//    return 0;
// }