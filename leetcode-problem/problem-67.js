function binaryStringSum(a, b) {
    let result = "";
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;
    
    // Iterate through both strings from right to left
    while (i >= 0 || j >= 0 || carry === 1) {
        const digitA = i >= 0 ? parseInt(a[i]) : 0;
        const digitB = j >= 0 ? parseInt(b[j]) : 0;
        
        // Calculate the sum of current digits and carry
        const sum = digitA + digitB + carry;
        
        // Determine the current digit and carry for the next iteration
        result = (sum % 2) + result;
        carry = sum >= 2 ? 1 : 0;
        
        // Move to the next digit
        i--;
        j--;
    }
    
    return result;
}

// Test the function
const a = "11";
const b = "1";
console.log(binaryStringSum(a, b));