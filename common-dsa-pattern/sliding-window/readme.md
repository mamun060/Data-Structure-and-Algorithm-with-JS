# 🪟 Sliding Window Pattern

The **Sliding Window** pattern is a strategy used to reduce the time complexity of problems that involve finding a sub-range (subarray or substring) that meets certain criteria.

## 🚀 Why use it?
- **Efficiency:** Converts $O(n^2)$ or $O(n^3)$ problems into $O(n)$.
- **Optimization:** Avoids redundant calculations by reusing the result of the previous window.

## 🛠 Types of Sliding Window

### 1. Fixed Size Window
The size of the window ($k$) is pre-defined. 
*Example: Find the maximum sum of $k$ consecutive elements.*

### 2. Variable Size Window
The window size expands or shrinks based on a condition.
*Example: Smallest subarray with a sum greater than $X$.*

---

## 📝 Common Use Cases
- Finding longest/shortest substring with $k$ unique characters.
- Calculating running averages.
- Finding all anagrams in a string.

## 💻 Code Example (JavaScript - Fixed Window)
Find the maximum sum of any contiguous subarray of size `k`.

```javascript
function maxSubarraySum(arr, k) {
    let maxSum = 0;
    let windowSum = 0;

    // 1. Calculate the sum of the first window
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;

    // 2. Slide the window from start to end
    for (let i = k; i < arr.length; i++) {
        // Add the next element and subtract the first element of the previous window
        windowSum += arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}

const data = [2, 1, 5, 1, 3, 2];
console.log(maxSubarraySum(data, 3)); // Output: 9 (5+1+3)