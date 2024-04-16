// To solve this problem, you can follow these steps:

// Convert the string to lowercase.
// Remove all non-alphanumeric characters.
// Check if the resulting string is equal to its reverse.

function isPalindrome(s){
    const cleanString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanString === cleanString.split('').reverse().join('');
}

const s = " "
console.log(isPalindrome(s));
