function minSubArray(arr, number) {
  var curr_sum = 0;
  var lengthOfSubArray = Number.MAX_VALUE;
  var updateArrayIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    curr_sum = curr_sum + arr[i];

    // Handle negative numbers
    if (curr_sum <= 0) {
      updateArrayIndex = i;
      curr_sum = 0;
    }

    // sum becomes unstable if it becomes more than the number
    while (curr_sum > number && updateArrayIndex <= i) {
      // Update result if curr_sum's length is less than the minimum found
      lengthOfSubArray = Math.min(lengthOfSubArray, i - updateArrayIndex + 1);

      // removes elements from the left side until it becomes "stable" again
      curr_sum = curr_sum - arr[updateArrayIndex];
      updateArrayIndex++;
    }
  }
  return lengthOfSubArray;
}

// This breaks because it never finds the max value
// var arr = [1, 2, 3, 4, 5, 6, 7, 8];

var arr = [1, 4, 45, 6, 0, 19];

var number = 51;

console.log(minSubArray(arr, number));

arr = [1, 10, 5, 2, 7];
number = 9;
console.log(minSubArray(arr, number));
