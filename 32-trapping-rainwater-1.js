// https://www.geeksforgeeks.org/trapping-rain-water/
// very similar to 32-solution-given.js

/**
 * * The idea is to traverse every array element and find the
 * highest bars on the left and right sides.  Take the smaller
 * of those two heights.  The difference between the smaller height
 * and height of the current element is the amount of water that
 * can be stored in this array element.  Thus:
 *
 * 1.   Traverse the array from start to end
 * 2.   For every element, traverse the array from start to that
 * index and find the maximum height(a), then traverse the array from
 * the current index to the end and find the maximum height(b)
 * 3.   The amount of water that will be stored in this column is
 * min(a, b) - array[i], so add this value to the total amount of
 * water stored.
 * 4.   Print the total.
 */

function maxWater(arr) {
  // hold that water!
  let res = 0;

  let n = arr.length;

  // Check every element of the array except the first and last
  for (let i = 1; i < n - 1; i++) {
    // find maximum element on left
    let left = arr[i];
    for (let j = 0; j < i; j++) {
      left = Math.max(left, arr[j]);
    }

    // find maximum element on right
    let right = arr[i];
    for (let j = i + 1; j < n; j++) {
      right = Math.max(right, arr[j]);
    }

    // update the reservior
    // This is the key to the whole thing right here.
    res += Math.min(left, right) - arr[i];
  }
  return res;
}

let arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(maxWater(arr));
