// https://www.geeksforgeeks.org/minimum-length-subarray-sum-greater-given-value/

function smallestSubWithSum(arr, num) {
  const n = arr.length;

  // Initialize length of smallest subarray
  let min_len = n + 1;

  // Pick every element as starting point
  for (let start = 0; start < n; start++) {
    // Initialize sum starting with current start
    let curr_sum = arr[start];

    // if first element itself is greater, we're done!
    if (curr_sum > num) return 1;

    for (let end = start + 1; end < n; end++) {
      // add last element to current sum
      curr_sum += arr[end];

      // If sum becomes more than x and length of
      // current subarray is smaller than current
      // smallest then update smallest
      if (curr_sum > num && end - start + 1 < min_len)
        min_len = end - start + 1;
    }
  }
  return min_len;
}

let arr = [1, 10, 5, 2, 7];
console.log(smallestSubWithSum(arr, 9));
