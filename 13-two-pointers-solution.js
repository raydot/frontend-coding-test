function hasArrayTwoCandidates(inputArray, sum) {
  var l, r;

  /* Sort the elements */
  inputArray.sort();

  // Look for candiates in the sorted array from left and right sides
  left = 0;
  right = inputArray.length - 1;
  while (left < right) {
    if (inputArray[left] + inputArray[right] == sum)
      return `Found ${inputArray[left]} and ${inputArray[right]}`;
    else if (inputArray[left] + inputArray[right] < sum) {
      left++;
    } else {
      right--;
    }
  }
  return 0;
}

const A = [1, 4, 45, 6, 10, -8];
var n = 16;

console.log(hasArrayTwoCandidates(A, n));
