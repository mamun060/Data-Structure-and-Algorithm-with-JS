# 🪟 Sliding Window Pattern

The **Sliding Window** pattern is a strategy used to reduce the time complexity of problems that involve finding a sub-range (subarray or substring) that meets certain criteria.

**Bangla**:
স্লাইডিং উইন্ডো হলো এমন একটি টেকনিক যা অ্যারে বা স্ট্রিংয়ের একটি নির্দিষ্ট অংশের (উইন্ডো) ওপর কাজ করতে ব্যবহৃত হয়। সাধারণত নেস্টেড লুপ ব্যবহার করলে কোড ধীরগতিতে ($O(n^2)$) কাজ করে, কিন্তু এই টেকনিকে আমরা একটি "জানালা" বা উইন্ডোকে সামনের দিকে সরিয়ে নিয়ে যাই, ফলে মাত্র একবার পুরো ডাটা ট্রাভার্স করেই কাজ শেষ করা যায় ($O(n)$ complexity)।

## Why use it?
- **Efficiency:** Converts $O(n^2)$ or $O(n^3)$ problems into $O(n)$.
- **Optimization:** Avoids redundant calculations by reusing the result of the previous window.

## Types of Sliding Window

### 1. Fixed Size Window
The size of the window (k) is pre-defined. 
*Example: Find the maximum sum of k consecutive elements.*
**Fixed Size Window (স্থায়ী জানালা)**
- এখানে জানালার সাইজ ($k$) বলা থাকে। যেমন: "পরপর ৩টি বা ৫টি সংখ্যার যোগফল"।কখন ব্যবহার করবেন? যখন সাব-অ্যারের সাইজ ফিক্সড।

### 2. Variable Size Window
The window size expands or shrinks based on a condition.
*Example: Smallest subarray with a sum greater than $X$.*

**Variable Size Window (পরিবর্তনশীল জানালা)**
- এখানে জানালার সাইজ নির্দিষ্ট থাকে না, বরং একটি শর্ত দেওয়া থাকে। যেমন: "এমন সবচাইতে ছোট সাব-অ্যারে খুঁজে বের করো যার যোগফল অন্তত ২০"।
- এখানে জানালা কখনো বড় হবে (ডান দিক বাড়িয়ে), আবার শর্ত পূরণ হলে জানালা ছোট হবে (বাম দিক কমিয়ে)।

---

## Common Use Cases
- Finding longest/shortest substring with $k$ unique characters.
- Calculating running averages.
- Finding all anagrams in a string.

### Kadane’s Algorithm এবং Sliding Window দেখতে একরকম মনে হলেও এদের কাজের উদ্দেশ্য আর নিয়ম আলাদা।
সহজ কথায়:
**Kadane's Algorithm** ব্যবহার করা হয় যখন আপনি যেকোনো সাইজের (সাইজ ফিক্সড না) সাব-অ্যারে খুঁজছেন যার যোগফল সর্বোচ্চ বা সর্বনিম্ন।

**Sliding Window** ব্যবহার করা হয় যখন আপনার কাছে কোনো নির্দিষ্ট শর্ত (যেমন: উইন্ডো সাইজ ৩ হতে হবে, অথবা যোগফল ১০ হতে হবে) থাকে।
---
### ইন্টারভিউতে কনফিউশন কাটানোর টেকনিক:
- যদি ইন্টারভিউয়ার জিজ্ঞেস করে, "কখন কোনটা ব্যবহার করব?"
- ১. Kadane's: যখন কোনো লিমিট নেই, শুধু Maximum Sum Subarray খুঁজতে হবে।
- ২. Fixed Window: যখন বলা থাকবে Size = K।
- ৩. Variable Window: যখন কোনো Target বা Condition দেওয়া থাকবে (যেমন: Sum $\ge$ X, বা Unique Characters)।

### Examples of Kadane's Algorithm, Fixed Size Sliding Window, and Variable Size Sliding Window.

***1. Kadane's Algorithm (Maximum Subarray Sum)***
- Use Case: To find the maximum possible sum of a contiguous subarray when there are no constraints on the subarray size.

```JavaScript
/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArraySum(nums) {
    let currentMax = nums[0];
    let globalMax = nums[0];

    for (let i = 1; i < nums.length; i++) {
        // Decision: Start new subarray at current element OR extend the existing one
        currentMax = Math.max(nums[i], currentMax + nums[i]);
        
        // Update record if the current subarray is the best so far
        globalMax = Math.max(globalMax, currentMax);
    }

    return globalMax;
}

// Example:
const arr1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArraySum(arr1)); // Output: 6 ([4, -1, 2, 1])
```

***2. Fixed Size Sliding Window***
- Use Case: When you need to perform calculations on subarrays of a fixed size (k) (e.g., Average/Max sum of every 3 elements).

```JavaScript
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
function maxFixedWindow(arr, k) {
    let windowSum = 0;
    let maxSum = 0;

    // 1. Calculate sum of the first window
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;

    // 2. Slide the window across the array
    for (let i = k; i < arr.length; i++) {
        // Add the next element, subtract the element that is sliding out
        windowSum += arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}

// Example:
const arr2 = [2, 1, 5, 1, 3, 2];
console.log(maxFixedWindow(arr2, 3)); // Output: 9 ([5, 1, 3])
```

***3. Variable Size Sliding Window***
- Use Case: To find the smallest/longest subarray that meets a specific condition/target (e.g., sum $\ge$ X).

```JavaScript
/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
function minSubArrayLen(arr, target) {
    let minLength = Infinity;
    let windowSum = 0;
    let left = 0;

    for (let right = 0; right < arr.length; right++) {
        windowSum += arr[right]; // Expand window to the right

        // Shrink window from the left until condition is no longer met
        while (windowSum >= target) {
            minLength = Math.min(minLength, right - left + 1);
            windowSum -= arr[left];
            left++;
        }
    }

    return minLength === Infinity ? 0 : minLength;
}

// Example:
const arr3 = [2, 3, 1, 2, 4, 3];
console.log(minSubArrayLen(arr3, 7)); // Output: 2 ([4, 3])
```