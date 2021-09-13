// Given test cases:
// input: nums = [3, 2, 1, 5, 6, 4], k = 2
// output: 5

// input: nums = [3, 2, 3, 1, 2, 4, 5, 5, 6], k = 4
// output: 4

const findKthLargest = (nums, k) => {
  // remove duplicates // DON'T HAVE TO REMOVE DUPLICATES!  IT'S THE OVERALL NUMBER!
  //   let outArray = [];
  //   nums.forEach((item) => {
  //     if (!outArray.includes(item)) outArray.push(item);
  //   });
  //   outArray.sort();
  //   console.log(outArray, outArray.length);
  //   return outArray[outArray.length - k];
  nums.sort((a, b) => a - b);
  console.log(nums);
  return nums[nums.length - k];
};

var testCase1 = [3, 2, 1, 5, 6, 4];
console.log(findKthLargest(testCase1, 2));

var testCase2 = [3, 2, 3, 1, 2, 4, 5, 5, 6];
console.log(findKthLargest(testCase2, 4));

var testCase3 = [
  3, 2, 3, 1, 2, 4, 5, 5, 6, 7, 7, 8, 2, 3, 1, 1, 1, 10, 11, 5, 6, 2, 4, 7, 8,
  5, 6,
];
console.log(findKthLargest(testCase3, 2)); // expected 10

const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(
  `This script uses approximately ${Math.round(used * 100) / 100} MB`
);

/**
 * This algo takes up a fairly large amount of memory!  There are discussions around using a priority
 * queue to decrease the swap size, but not to where I can see that any of them are worth considering.
 */

/**
 * // SIDEBAR
// var is function scoped
// let is block scoped

// works
var x = 5;
console.log(x);

// works
let y = 10;
console.log(y);

// undefined (hoists)
console.log(z);
var z = 2;

// throws error
console.log(a);
let a = 3;
 */
