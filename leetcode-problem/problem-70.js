// climbing stairs problem 
// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?


// function fib(n){
//     if (n <= 1) return n;
//     return fib(n-1) + fib(n-2);
// }

// function memoisedFibonacci(n, cache) { 
//     cache = cache || [1, 1] 
//     if (cache[n]) 
//         return cache[n] 
//     return cache[n] = memoisedFibonacci(n - 1, cache) +  
//     memoisedFibonacci(n - 2, cache); 
// }

// function climbStairs(n, cache){
//     return memoisedFibonacci(n+1, cache)
// };


function climbStairs(n, memo = {}) {
    if (n in memo) {
      return memo[n];
    }
    
    if (n <= 2) {
      return n;
    }
    
    memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
    return memo[n];
}
  

console.log(climbStairs(44));