// SPIRAL MATRIX

// Given an m x n matrix, return all elements of the matrix in spiral order.

// TEST CASES
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]

// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

var spiralOrder = function (matrix) {
  // First figure out the matrix size
  // Not doing any error checking
  var width = matrix[0].length;
  var height = matrix.length;

  var maxWidth = width - 1;
  var maxHeight = length - 1;

  var xIndex = 0;
  var yIndex = 0;

  var xSpeed = 1;
  var ySpeed = 0;

  var outMatrix = [];

  outMatrix.push(matrix[xIndex][yIndex]);
  var done = false; // doing it this way for right now

  while (!done) {}

  //console.log(`[${width}, ${height}]`);
  return outMatrix;
};

var matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
var matrix2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

console.log(spiralOrder(matrix1));
console.log(spiralOrder(matrix2));
