// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// https://leetcode.com/explore/learn/card/fun-with-arrays/521/introduction/3240/

// var sortedSquares = function (nums) {
//   let uno = nums.map((num) => Math.pow(num, 2));
//   uno = uno.sort((a, b) => a - b);
//   return uno;
// };

// Good, but not there yet Davey:
var sortedSquares = function (r) {
  return r.map((r) => r * r).sort((r, t) => r - t);
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));

// What's going on here?
var sortedSquares2 = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  const res = new Array(nums.length);

  for (let i = nums.length - 1; i >= 0; i--) {
    if (Math.abs(nums[left]) < Math.abs(nums[right])) {
      res[i] = nums[right] * nums[right];
      right--;
    } else {
      res[i] = nums[left] * nums[left];
      left++;
    }
    console.log(left, right, res);
  }
  return res;
};

console.log(sortedSquares2([-4, -1, 0, 3, 10]));
