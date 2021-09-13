/**
Sample problem:

Given an array of integers of size ‘n’.
Our aim is to calculate the maximum sum of ‘k’ 
consecutive elements in the array.

Input  : arr[] = {100, 200, 300, 400}
         k = 2
Output : 700

Input  : arr[] = {1, 4, 2, 10, 23, 3, 1, 0, 20}
         k = 4 
Output : 39
We get maximum sum by adding subarray {4, 2, 10, 23}
of size 4.

Input  : arr[] = {2, 3}
         k = 3
Output : Invalid
There is no subarray of size 3 as size of whole
array is 2.
 */

// METHOD 1: BRUTE FORCE (O(k * n))
function maxSum(arr, n, k) {
  // not sure why n needs to be passed in?

  // Initialize result
  let max_sum = Number.MIN_VALUE;

  // consider all blocks starting with i
  for (let i = 0; i < n - k + 1; i++) {
    let current_sum = 0;
    for (let j = 0; j < k; j++) current_sum = current_sum + arr[i + j];

    // Update result if required
    max_sum = Math.max(current_sum, max_sum);
  }
  return max_sum;
}

let arr = [1, 4, 2, 10, 2, 3, 1, 0, 20];
let k = 4;
let n = arr.length;
console.log(`maxSum: ${maxSum(arr, n, k)}`);

// METHOD 2: WINDOW SLIDING TECHNIQUE (O(n))
// Slide through the array in a block of width k
// To get the sum of the current block of k elements,
// subtract the first element from the previous block
// and add the last element of the current block.
function maxSumofK(arr, k) {
  let max = 0;
  let sum = 0;
  // find initial sum of first k elements
  for (let n = 0; n < k; n++) sum += arr[n];

  // iterate the array once and increment the right edge
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    max = Math.max(max, sum);
  }
  return max;
}

console.log(`maxSumofK: ${maxSumofK(arr, k)}`);
